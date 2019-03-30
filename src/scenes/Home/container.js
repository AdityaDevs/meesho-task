import {connect} from 'react-redux'
import HomeComponent from './component'
import {fetchList} from './actions'


const mapStateToProps = state => ({
  data: state.home.data,
  loading: state.home.fetching
})

const mapDispatchToProps = {
  fetchList
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default Home
