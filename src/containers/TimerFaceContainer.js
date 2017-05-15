import { connect } from 'react-redux';
import TimerFace from '../components/TimerFace';
import '../styles/TimerFace.css';

const mapStateToProps = (state) => ({
  timer: state.timer.timer,
});

export default connect(mapStateToProps)(TimerFace);
