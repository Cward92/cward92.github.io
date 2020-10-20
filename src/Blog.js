import React from 'react';
import Posts from './Components/Posts';
import './Blog.css';
import './Blogs.json';
import Navbar from './Components/Navbar';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Home',
    }
    this.renderNav = this.renderNav.bind(this);
    this.navList = ['Home', 'Posts', 'Projects', 'Links'];
  }

  setPage(newPage) {
    this.setState({ page: newPage });
    console.log(this.state.page);
  }

  renderNav() {
    let newNav = this.navList.map(x => {
      return (
        <li key={x} className="nav-item">
          <a className="nav-link" href="#" onClick={() => this.setPage(x)}>{x}</a>
        </li>
      );
    });
    return newNav;
  }

  render() {
    return (
      <>
        <Navbar>{this.renderNav()}</Navbar>

        {false ? <Posts /> : (
          <>

            <header className="masthead">
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-md-6 offset-md-3 p-2 text-center border border-dark border-dashed-bold">
                    <h1 className="display-4 font-weight-bolder">Awesome Blog</h1>
                    <p className="lead">A blog by Chandler Ward</p>
                  </div>
                </div>
              </div>
            </header>

            <section className="py-5">
              <div className="container">
                <h2 className="font-weight-light">Welcome to the best blog ever!</h2>
                <p>Thank you so much for visiting my blog! Please take a look at my recent <a href="/sites/posts.html">posts</a> using the navigation tabs above.
             You will also see links to my current <a href="/sites/projects.html">projects</a> on GitHub, as well as a link to my work <a href="/sites/links.html">profiles</a>. If you have any recommendations for better ways to improve my blog,
             please feel free to leave a request on this blog's public <a href="www.google.com">Github Repository</a>. Thank you!</p>
              </div>
            </section>
          </ >
        )}

      </ >
    )
  }
}

export default Blog;
