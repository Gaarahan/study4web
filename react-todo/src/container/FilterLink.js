import { connect } from "react-redux";
import Link from "../components/Link";
import { setVisibilityFilter } from "../action";

const mapStateToProps = ({visibilityFilter}, ownProps) => {
  return {
    active: visibilityFilter === ownProps.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps)=> {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);