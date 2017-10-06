"use strict";
class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h2>Front End Course Directory</h2>
          <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
          <p>Learn front end web development and much more! This simple directory app offers a preview of our course
					library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
					skills you need to launch a new career in front end web development.</p>
          <p>We have thousands of videos created by expert teachers on web design and front end development. Our
					library is continually refreshed with the latest on web technology so you will never fall behind.</p>
          <hr />
        </div>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h2>About</h2>
          <p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
        </div>
      </div>
    );
  }
}

class Teachers extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h2>Teachers</h2>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <img src="images/batman.png" alt="batmanProfessor" />
            <h3>Batman</h3>
            <p>Batman is a software engineer and philosopher trying to leave the world
               better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.</p>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <img src="images/flash.png" alt="flashProfessor" />
            <h3>Flash</h3>
            <p>Flash is a JavaScript developer working on large-scale applications. He's also a teacher
               who strives to support students in removing all barriers to learning code.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <img src="images/gatubela.png" alt="gatubel<Professor" />
            <h3>Catwoman</h3>
            <p>Catwoman found her passion for computers and programming over 15 years ago. She is excited to
              introduce people to the wonderful world of JavaScript.</p>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <img src="images/hulk.png" alt="hulkProfessor" />
            <h3>HULK</h3>
            <p>All of his professional life, Hulk has worked with computers online; he is a polyglot programmer
              and likes using the right tools for the job.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <img src="images/superman.png" alt="supermanProfessor" />
            <h3>Superman</h3>
            <p>Superman is a developer, author of CSS: The Missing Manual, JavaScript & jQuery: The Missing Manual, and web
              development teacher</p>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <img src="images/wonderWoman.png" alt="wonderWomanProfessor" />
            <h3>Wonder Woman</h3>
            <p>Wonder Woman is a web developer and teacher who is passionate about building scalable,
               data driven web apps, especially ones that address old problems with new tech!</p>
          </div>
        </div>
      </div>
    );
  }
}
class CssInfo extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-xs-12 col-sm-12">
          <div className="row">
            <div className="col-md-2 col-sm-2 col-xs-2 courses text-center">
              <img src="images/css/css_basics.png" alt="" />
            </div>
            <div className="col-md-9 col-xs-9 col-sm-9">
              <h3>CSS Basics</h3>
              <p>CSS (Cascading Style Sheets) is a style sheet language that describes the
                 presentation of web pages. Whereas HTML is what forms the structure of a
                 web page, CSS is what we use to style the HTML with colors, backgrounds,
                 font sizes, layout, and more. As you'll soon learn, CSS is one of the core
                 technologies for designing and building websites</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-2 col-xs-2 courses text-center">
              <img src="images/css/css_selectors.png" alt="" />
            </div>
            <div className="col-md-9 col-xs-9 col-sm-9">
              <h3>CSS Selectors</h3>
              <p>In this course, we're going to go beyond the basic selector concepts covered
                in CSS Basics. Besides the common ways to select elements with type, ID and
                class selectors, we're able to target elements based on their attributes,
                position in the HTML document, even their relation to other elements.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class JavaScriptInfo extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-xs-12 col-sm-12">
          <div className="row">
            <div className="col-md-2 col-sm-2 col-xs-2 courses text-center">
              <img src="images/js/JavaScript_Basics.png" alt="" />
            </div>
            <div className="col-md-9 col-xs-9 col-sm-9">
              <h3>How to Make a Website</h3>
              <p>JavaScript is a programming language that drives the web: from front-end user interface design,
                 to backend server-side programming, you'll find JavaScript at every stage of a web site and web 
                 application. In this course, you'll learn the fundamental programming concepts and syntax of the 
                 JavaScript programming language.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-2 col-xs-2 courses text-center">
              <img src="images/js/JavaScript_Basics_Stage5.png" alt="" />
            </div>
            <div className="col-md-9 col-xs-9 col-sm-9">
              <h3>HTML Forms</h3>
              <p>Storing, tracking and handling data is a large part of computer programming. Arrays provide a 
                method for storing multiple values into a single variable. That makes an array a convenient way
                 to pass around a list of items.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class HTMLInfo extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-xs-12 col-sm-12">
          <div className="row">
            <div className="col-md-2 col-sm-2 col-xs-2 courses text-center">
              <img src="images/html/howtobuildawebsite.png" alt="" />
            </div>
            <div className="col-md-9 col-xs-9 col-sm-9">
              <h3>How to Make a Website</h3>
              <p>If you’ve never built a website before and you have no coding or design experience,
                this is the place to start. In this project, we learn how to build a modern portfolio
                website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax.
                Next, we learn how to build custom web pages with an image gallery and contact page.
                Finally, we walk through how to share a website live on the web.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-2 col-xs-2 courses text-center">
              <img src="images/html/html_forms.png" alt="" />
            </div>
            <div className="col-md-9 col-xs-9 col-sm-9">
              <h3>HTML Forms</h3>
              <p>The web is a two-way communication medium. There’s lots of HTML elements for displaying
                 data and producing output, and conversely, there’s also lots of HTML elements for accepting
                  input. Accepting input from the user means creating web forms. In this course, we’ll learn
                  about all the most important form elements that web professionals use on a daily basis.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Courses extends React.Component {
  render() {
    const { route } = this.props;
    let CurrentList;
    switch (route) {
      case 'css':
        CurrentList = CssInfo;
        break;
      case 'javascript':
        CurrentList = JavaScriptInfo;
        break;
      default: //'html'
        CurrentList = HTMLInfo;
        break;
    }
    return (
      <div classname="main-content courses">
        <nav className="navbar navbar-inverse secondNav">
          <div className="container-fluid">
            <div className="navbar-header">
              <h2>COURSES</h2>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#/courses/html">HTML</a>
              </li>
              <li>
                <a href="#/courses/css">CSS</a>
              </li>
              <li>
                <a href="#/courses/javascript">JAVASCRIPT</a>
              </li>
            </ul>
          </div>
        </nav>
        <div classname="container-fluid">
          <div classname="row">
            <div classname="col-md-12 col-sm-12 col-xs-12">
              <CurrentList />
            </div>
          </div>
        </div>

      </div>

    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }
  render() {
    let Child;
    let propsForCourses = null;
    switch (this.state.route) {
      case '/about':
        Child = About;
        break;
      case '/teachers':
        Child = Teachers;
        break;
      case '/courses':
        Child = Courses;
        break;
      case '/courses/html':
        Child = Courses;
        propsForCourses = 'html';
        break;
      case '/courses/css':
        Child = Courses;
        propsForCourses = 'css';
        break;
      case '/courses/javascript':
        Child = Courses;
        propsForCourses = 'javascript';
        break;
      default:
        Child = Home;
    }
    return (
      <div id="info">
        <header>{' '}
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">SuperCourses</a>
              </div>
              <ul className="nav navbar-nav">
                <li>
                  <a href="#/home">Home</a>
                </li>{' '}
                <li>
                  <a href="#/about">About</a>
                </li>
                <li>
                  <a href="#/teachers">Teachers</a>
                </li>
                <li>
                  <a href="#/courses">Courses</a>
                </li>
              </ul>{' '}
            </div>
          </nav>
        </header>
        <div id="container-info" className="container-fluid">
          {
            propsForCourses ?
              <Child route={propsForCourses} />
              :
              <Child />
          }
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />,
  document.getElementById("container"));