import React, { useState, useReducer } from "react";
import Navbar from "../Navbar/Navbar";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import updateVoca from "../../actions/vocaAction";
import { Link } from "react-router-dom";
import "./Add.css";

function Add(props) {
  // type data
  const typeDatas = ["동사", "명사", "형용사", "부사", "감탄사"];

  const typeData = typeDatas.map((item, i) => {
    return <option key={i}>{item}</option>;
  });

  // function for add new voca
  function addVoca(title, type, example) {
    props.updateVoca(title, type, example);
  }

  // form state
  const [formIsValid, setFormIsValid] = useState(false);

  // Title reducer
  const titleReducer = (state, action) => {
    if (action.type === "TitleValue") {
      return {
        value: action.val,
        isValid: action.valid,
      };
    }
    return state;
  };

  // Type reducer
  const typeReducer = (state, action) => {
    if (action.type === "TypeValue") {
      return {
        value: action.val,
        isValid: action.valid,
      };
    }
    return state;
  };

  // Example reducer
  const exampleReducer = (state, action) => {
    if (action.type === "ExampleValue") {
      return {
        value: action.val,
        isValid: action.valid,
      };
    }
    return state;
  };

  // useReducers
  const [titleState, dispatchTitle] = useReducer(titleReducer, {
    value: "",
    isValid: false,
  });

  const [typeState, dispatchType] = useReducer(typeReducer, {
    value: "동사",
    isValid: false,
  });

  const [exampleState, dispatchExample] = useReducer(exampleReducer, {
    value: "",
    isValid: false,
  });

  // Handler
  const titleHandler = (e) => {
    dispatchTitle({
      val: e.target.value,
      type: "TitleValue",
      valid: e.target.value !== "",
    });
    setFormIsValid(e.target.value !== "" && exampleState.isValid);
  };

  const typeHandler = (e) => {
    dispatchType({
      val: e.target.value,
      type: "TypeValue",
      valid: e.target.value !== "",
    });
  };

  const exampleHandler = (e) => {
    dispatchExample({
      val: e.target.value,
      type: "ExampleValue",
      valid: e.target.value !== "",
    });
    setFormIsValid(e.target.value !== "" && titleState.isValid);
  };

  return (
    <section className="section__add">
      <Navbar />
      <div className="container__add">
        <form className="form__add">
          <h3>New Voca!</h3>
          <input
            className="input__title"
            placeholder="단어를 입력해주세요."
            onChange={titleHandler}
            value={titleState.value}
          />
          <select
            className="select__type"
            onChange={typeHandler}
            value={typeState.value}
          >
            {typeData}
          </select>
          <input
            className="input__example"
            placeholder="example"
            onChange={exampleHandler}
            value={exampleState.value}
          />
          <Link to="/Voca">
            <button
              className="btn__save"
              disabled={!formIsValid}
              onClick={() =>
                addVoca(titleState.value, typeState.value, exampleState.value)
              }
            >
              Save
            </button>
          </Link>
        </form>
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
      updateVoca: updateVoca,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);
