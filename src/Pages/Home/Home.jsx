import React, { useEffect, Fragment } from "react";
import styles from "./style.module.css";
import { connect } from "react-redux";
import { getData, getSingleUser, setLoading } from "../../actions/dataAction";
import CardComponent from "../../Components/CardComponent/CardComponent";
import Loading from "../../Components/Loading";

function Home(props) {
  useEffect(() => {
    props.setLoading(true);
    props.getData();
    //eslint-disable-next-line
  }, []);
  return (
    <div className={styles.main_container}>
      {props.data.loading ? (
        <Loading />
      ) : (
        <Fragment>
          <CardComponent user={props.data.single_item} />
          <span className={styles.button_row}>
            {props.data.items.map((item, index) => {
              return (
                <button
                  className={styles.item_btn}
                  onClick={(e) => {
                    e.preventDefault();
                    props.setLoading(true);
                    props.getSingleUser(item.id);
                  }}
                >
                  {" "}
                  {index + 1}{" "}
                </button>
              );
            })}
          </span>
        </Fragment>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getData, getSingleUser, setLoading })(
  Home
);
