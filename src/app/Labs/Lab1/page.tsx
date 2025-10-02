"use client";

export default function Lab1() {
  return (
    <div id="wd-lab1" style={{ padding: 16 }}>
      <h2>Lab 1</h2>
      {/* Put this right under <h2>Lab 1</h2> in app/Labs/Lab1/page.tsx */}
      <div id="wd-lab1-landing" style={{ margin: "12px 0" }}>
        <p>
          <strong>Your name:</strong> <em>VIKAS NERIYANURU</em>
        </p>
        <p>
          <strong>Section:</strong>{" "}
          <em>Fall 2025 Semester Section Number: 05</em>
        </p>
        <p>
          <a
            href="https://github.com/VIKAS0804"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>GitHub (profile)</strong>
          </a>
        </p>
      </div>

      <h3>HTML Examples</h3>

      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and
        subsections… HTML provides six heading tags: h1, h2, h3, h4, h5, and h6.
        Tag h1 is the largest heading and h6 is the smallest heading.
        <div style={{ marginTop: 8 }}>
          <h1>Heading h1</h1>
          <h2>Heading h2</h2>
          <h3>Heading h3</h3>
          <h4>Heading h4</h4>
          <h5>Heading h5</h5>
          <h6>Heading h6</h6>
        </div>
      </div>

      <div id="wd-p-tag" style={{ marginTop: 24 }}>
        <h4>Paragraph Tag</h4>
        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text.
        </p>
        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>

      <div id="wd-lists" style={{ marginTop: 24 }}>
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>
        My favorite recipe: Panner Butter Masala
        <ol id="wd-your-favorite-recipe">
          <li>
            Prep: cube paneer; blend tomatoes + cashews; chop onion, chili,
            ginger-garlic.
          </li>
          <li>
            Cook: melt butter, sauté onion & spices; add tomato-cashew purée,
            simmer; stir in cream, salt, sugar.
          </li>
          <li>
            Finish: add paneer & kasuri methi; simmer 2-3 min; garnish with
            butter/cilantro; serve with naan or rice.
          </li>
        </ol>
        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
          <li>Clean Code</li>
          <li>Designing Data-Intensive Applications</li>
          <li>The Pragmatic Programmer</li>
          <li>Refactoring</li>
          <li>You Don`t Know JS</li>
        </ul>
        Your favorite books (in no particular order)
        <ul id="wd-your-books">
          <li>Rich Dad Poor Dad</li>
          <li>POWER</li>
          <li>How To Make Friends And Influence People</li>
        </ul>
      </div>

      <div id="wd-tables" style={{ marginTop: 24 }}>
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/03/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>Bootstrap</td>
              <td>2/17/21</td>
              <td>88</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>JavaScript</td>
              <td>2/24/21</td>
              <td>92</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>React</td>
              <td>3/03/21</td>
              <td>94</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>Node.js</td>
              <td>3/10/21</td>
              <td>87</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>MongoDB</td>
              <td>3/17/21</td>
              <td>93</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>Express</td>
              <td>3/24/21</td>
              <td>89</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>Next.js</td>
              <td>3/31/21</td>
              <td>91</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>TypeScript</td>
              <td>4/07/21</td>
              <td>90</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div id="wd-images" style={{ marginTop: 24 }}>
        <h4>Image tag</h4>
        Loading an image from the internet: <br />
        <img
          id="wd-starship"
          width="400px"
          alt="Starship"
          src="https://media.istockphoto.com/id/1344443930/photo/space-shuttle-rocket-launch-in-the-sky-and-clouds-to-outer-space-sky-and-clouds-spacecraft.jpg?s=2048x2048&w=is&k=20&c=NQ2Y38_lBy-ZPqQcdlwfjhYOuo8vWle8Yjdo07v-Gqw="
        />
        <br />
        <br />
        Loading a local image: <br />
        <img
          id="wd-teslabot"
          src="/images/teslabot.jpg"
          height="200px"
          alt="Teslabot"
        />
      </div>

      <div id="wd-forms" style={{ marginTop: 24 }}>
        <h4>Form Elements</h4>

        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label className="label" htmlFor="wd-text-fields-username">
            Username:
          </label>
          <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
          <label className="label" htmlFor="wd-text-fields-password">
            Password:
          </label>
          <input
            type="password"
            defaultValue="secret123"
            id="wd-text-fields-password"
          />
          <br />
          <label className="label" htmlFor="wd-text-fields-first-name">
            First name:
          </label>
          <input type="text" title="John" id="wd-text-fields-first-name" />{" "}
          <br />
          <label className="label" htmlFor="wd-text-fields-last-name">
            Last name:
          </label>
          <input
            type="text"
            placeholder="Doe"
            defaultValue="Wonderland"
            title="The last name"
            id="wd-text-fields-last-name"
          />
          <div style={{ marginTop: 16 }}>
            <h5>Text boxes</h5>
            <label htmlFor="wd-textarea">Biography:</label>
            <br />
            <textarea id="wd-textarea" cols={30} rows={6}>
              I like building web apps with Next.js and TypeScript.
            </textarea>
          </div>
          <div style={{ marginTop: 16 }}>
            <h5 id="wd-buttons">Buttons</h5>
            <button
              type="button"
              onClick={() => alert("Life is Good!")}
              id="wd-all-good"
            >
              Hello World!
            </button>
          </div>
          <div style={{ marginTop: 16 }}>
            <h5 id="wd-radio-buttons">Radio buttons</h5>
            <label>Favorite movie genre:</label>
            <br />
            <input type="radio" name="radio-genre" id="wd-radio-comedy" />
            <label htmlFor="wd-radio-comedy">Comedy</label>
            <br />
            <input type="radio" name="radio-genre" id="wd-radio-drama" />
            <label htmlFor="wd-radio-drama">Drama</label>
            <br />
            <input type="radio" name="radio-genre" id="wd-radio-scifi" />
            <label htmlFor="wd-radio-scifi">Science Fiction</label>
            <br />
            <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
            <label htmlFor="wd-radio-fantasy">Fantasy</label>
          </div>
          <div style={{ marginTop: 16 }}>
            <h5 id="wd-checkboxes">Checkboxes</h5>
            <label>Favorite movie genre:</label>
            <br />
            <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
            <label htmlFor="wd-chkbox-comedy">Comedy</label>
            <br />
            <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
            <label htmlFor="wd-chkbox-drama">Drama</label>
            <br />
            <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
            <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
            <br />
            <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
            <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
          </div>
          <div style={{ marginTop: 16 }}>
            <h4 id="wd-dropdowns">Dropdowns</h4>

            <h5>Select one</h5>
            <label htmlFor="wd-select-one-genre">Favorite movie genre:</label>
            <br />
            <select id="wd-select-one-genre" defaultValue="SCIFI">
              <option value="COMEDY">Comedy</option>
              <option value="DRAMA">Drama</option>
              <option value="SCIFI">Science Fiction</option>
              <option value="FANTASY">Fantasy</option>
            </select>

            <h5 style={{ marginTop: 12 }}>Select many</h5>
            <label htmlFor="wd-select-many-genre">Favorite movie genres:</label>
            <br />
            <select
              multiple
              id="wd-select-many-genre"
              defaultValue={["COMEDY", "SCIFI"]}
            >
              <option value="COMEDY">Comedy</option>
              <option value="DRAMA">Drama</option>
              <option value="SCIFI">Science Fiction</option>
              <option value="FANTASY">Fantasy</option>
            </select>
          </div>
          <div style={{ marginTop: 16 }}>
            <h4>Other HTML field types</h4>

            <label htmlFor="wd-text-fields-email">Email:</label>
            <input
              type="email"
              placeholder="jdoe@somewhere.com"
              id="wd-text-fields-email"
            />
            <br />

            <label htmlFor="wd-text-fields-salary-start">
              Starting salary:
            </label>
            <input
              type="number"
              defaultValue={100000}
              placeholder="1000"
              id="wd-text-fields-salary-start"
            />
            <br />

            <label htmlFor="wd-text-fields-rating">Rating:</label>
            <input
              type="range"
              defaultValue={4}
              max={5}
              id="wd-text-fields-rating"
            />
            <br />

            <label htmlFor="wd-text-fields-dob">Date of birth:</label>
            <input
              type="date"
              defaultValue="2000-01-21"
              id="wd-text-fields-dob"
            />
            <br />
          </div>
        </form>
      </div>

      <div id="wd-anchors" style={{ marginTop: 24 }}>
        <h4>Anchor tag</h4>
        Please{" "}
        <a href="https://www.lipsum.com" id="wd-lipsum" target="_blank">
          click here
        </a>{" "}
        to get dummy text
        <br />
        <a
          href="https://github.com/VIKAS0804/kambaz-next-js1"
          id="wd-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub repo
        </a>
      </div>
    </div>
  );
}
