import React, { Fragment } from "react";
import { connect } from "react-redux";
import styles from "./style.module.css";

function CardComponent(props) {
  return (
    <Fragment>
      {!props.data.single_item ? (
        <h2 className={styles.no_heading}>
          {" "}
          No user to display, please click on the buttons below{" "}
        </h2>
      ) : (
        <div className={styles.main_container}>
          <span
            className={styles.user_image}
            style={{ backgroundImage: `url(${props.data.single_item.avatar})` }}
          ></span>
          <br />
          <h3>
            {" "}
            <b> ID: </b> {props.data.single_item.id}
          </h3>
          <h3>
            {" "}
            <b> First Name: </b> {props.data.single_item.first_name}
          </h3>
          <h3>
            {" "}
            <b> Last Name: </b> {props.data.single_item.last_name}
          </h3>
          <h3>
            {" "}
            <b> E-Mail: </b> {props.data.single_item.email}
          </h3>
        </div>
      )}
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(CardComponent);
