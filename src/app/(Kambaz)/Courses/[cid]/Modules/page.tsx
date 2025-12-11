"use client";

import { useParams } from "next/navigation";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, editModule, setModules } from "./reducer";
import { useState, useEffect } from "react";
import * as client from "../../client";

interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: Lesson[];
  editing?: boolean;
}

interface RootState {
  modulesReducer: {
    modules: Module[];
  };
}

export default function Modules() {
  const { cid } = useParams();
  console.log("Modules component - cid from useParams():", cid);
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState("");

  useEffect(() => {
    console.log("useEffect running - fetching modules for courseId:", cid);
    const fetchModules = async () => {
      try {
        const fetchedModules = await client.findModulesForCourse(cid as string);
        console.log("Fetched modules result:", fetchedModules);
        dispatch(setModules(fetchedModules));
      } catch (error) {
        console.error("Error fetching modules:", error);
      }
    };

    fetchModules();
  }, [cid, dispatch]);

  const handleAddModule = async () => {
    try {
      const newModule = { name: moduleName, course: cid as string };
      const createdModule = await client.createModuleForCourse(cid as string, newModule);
      dispatch(addModule(createdModule));
      setModuleName("");
    } catch (error) {
      console.error("Error creating module:", error);
    }
  };

  const handleDeleteModule = async (moduleId: string) => {
    try {
      await client.deleteModule(cid as string, moduleId);
      dispatch(deleteModule(moduleId));
    } catch (error) {
      console.error("Error deleting module:", error);
    }
  };

  const handleUpdateModuleName = (module: Module, newName: string) => {
    dispatch(updateModule({ ...module, name: newName }));
  };

  const handleFinishEditing = async (module: Module) => {
    try {
      const updatedModule = { ...module, editing: false };
      await client.updateModule(cid as string, updatedModule);
      dispatch(updateModule(updatedModule));
    } catch (error) {
      console.error("Error finishing edit:", error);
    }
  };

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={handleAddModule}
      />
      <br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module) => (
            <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
                  <FormControl
                    className="w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(updateModule({ ...module, name: (e.target as HTMLInputElement).value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUpdateModuleName(module, (e.target as HTMLInputElement).value);
                        handleFinishEditing({ ...module, name: (e.target as HTMLInputElement).value });
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={handleDeleteModule}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson) => (
                    <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}