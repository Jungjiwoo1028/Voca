import React from "react";
import Voca from "./Voca";
import "./Vocas.css";
import updateVoca from "../../actions/vocaAction";
import deleteVoca from "../../actions/deleteAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function Vocas(props) {
  return props.vocaData.map((item, i) => {
    return (
      <section className="section__vocas" key={i}>
        <Voca title={item.title} type={item.type} example={item.example} />
      </section>
    );
  });
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
      updateVoca: updateVoca,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Vocas);
