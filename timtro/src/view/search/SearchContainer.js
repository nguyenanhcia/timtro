import {connect} from 'react-redux'
import Search from "./Search";
import {mostSearchAction, newRoomAction} from "./Action";

const mapStateToProps = (state) => {
  return {
    mostSearch: state.mostSearchReducer,
    newRoom: state.roomNewReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMostSearch: () => {
      dispatch(mostSearchAction())
    },
    getNewRoom: () => {
      dispatch(newRoomAction())
    },
  }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)
export default SearchContainer