import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Detail.css";
import deleteVoca from "../../actions/deleteAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Detail(props) {
  // 객체 통해서 변수 만들기
  const { title, type, example } = props.location.state;
  // function for delete voca
  function deleteVoca(title, type, example) {
    props.deleteVoca(title, type, example);
  }
  return (
    <section className="section__detail">
      <Navbar />
      <div className="container__detail">
        <div className="inner__detail">
          <div className="box__title">{title}</div>
          <div className="box__type">{type}</div>
          <div className="box__example">{example}</div>
          <Link to="/">
            <button
              className="btn__delete"
              onClick={() => deleteVoca(title, type, example)}
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// 1. 스토어의 state와 props를 엮는다.
function mapStateToProps(state) {
  return {
    vocaData: state.voca,
  };
}

// 2. action을 dispatch함수로 전달한다.
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      deleteVoca: deleteVoca,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
