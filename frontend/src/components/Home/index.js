import Banner from "./Banner";
import MainView from "./MainView";
import React, { useEffect, useState } from "react";
import Tags from "./Tags";
import agent from "../../agent";
import { connect } from "react-redux";
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
} from "../../constants/actionTypes";

const Promise = global.Promise;

const mapStateToProps = (state) => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
});

const Home = ({ token, onLoad, onUnload, tags, onClickTag }) => {
  const [search, setSearch] = useState();
  useEffect(() => {
    const tab = token ? "feed" : "all";
    const itemsPromise = token ? agent.Items.feed : agent.Items.all;

    onLoad(
      tab,
      itemsPromise,
      Promise.all([agent.Tags.getAll(), itemsPromise(search)])
    );

    return onUnload;
  }, [onLoad, onUnload, search, token]);

  return (
    <div className="home-page">
      <Banner search={search} setSearch={setSearch} />

      <div className="container page">
        <Tags tags={tags} onClickTag={onClickTag} />
        <MainView />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
