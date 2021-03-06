import {h, render, Component} from 'preact';
import {BubbleSlide, Bubble, HeadTracking} from '../../Components';

export default class HeadTrackingPage extends Component {
    render() {
        return (
            <BubbleSlide previous="/head-tracking-bonus" next="/acknowledgements">
                <Bubble><HeadTracking /></Bubble>
            </BubbleSlide>
        );
    }
};
