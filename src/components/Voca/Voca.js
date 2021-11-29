import React from "react";
import { Link } from "react-router-dom";
import "./Voca.css";
import deleteVoca from "../../actions/deleteAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function Voca(props) {
  return (
    <section className="section__voca">
      <Link
        to={{
          pathname: `/detail/${props.title}`,
          state: {
            title: props.title,
            type: props.type,
            example: props.example,
          },
        }}
      >
        <div className="container__voca">
          <div className="title">{props.title}</div>
          <div className="innerbox__type">
            <div className="type">{props.type[0]}</div>
          </div>
        </div>
      </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Voca);
