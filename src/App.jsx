import React from "react";
import { Route, Switch } from "react-router-dom";
import HelmetMetaData from "./HelmetData";

// Define BlogDetail as a functional component
const BlogDetail = ({ classes, blog }) => {
  return (
    <HelmetMetaData
      title={blog.title}
      description={blog.title + " " + blog.author.name}
      image={blog.gallery[0]}
    />
  );
};

const App = ({ classes }) => {
  return (
    <div className={classes.root}>
      <HelmetMetaData />
      <Switch>
        <Route path="/about" component={AboutUs} />
        <Route path="/blogs" component={Blog} />
        {/* Add a route for BlogDetail */}
        <Route
          path="/blog/:id"
          render={(props) => <BlogDetail {...props} classes={classes} />}
        />
      </Switch>
      <Popper className={classes.socialMediaPopper} open={true} transition>
        <FacebookShareButton
          url={"http://www.camperstribe.com"}
          quote={"CampersTribe - World is yours to explore"}
          hashtag="#camperstribe"
          className={classes.socialMediaButton}
        >
          <FacebookIcon size={36} />
        </FacebookShareButton>
        <TwitterShareButton
          url={"http://www.camperstribe.com"}
          title={"CampersTribe - World is yours to explore"}
          hashtag="#camperstribe"
          className={classes.socialMediaButton}
        >
          <TwitterIcon size={36} />
        </TwitterShareButton>
        <WhatsappShareButton
          url={"http://www.camperstribe.com"}
          title={"CampersTribe - World is yours to explore"}
          separator=":: "
          className={classes.socialMediaButton}
        >
          <WhatsappIcon size={36} />
        </WhatsappShareButton>
      </Popper>
    </div>
  );
};

export default App;
