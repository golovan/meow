import {h, render, Component} from 'preact';
import linkRef from 'linkref';
import {BubbleSlide, Bubble, BubbleCollection, SpeechRecognition, Loader} from '../../Components';

export default class SpeechRecognitionPage extends Component {
    constructor(...props) {
        super(...props);

        this.state = {
            speechRegnitionInProcess: false,
            recognizedText: '',
        };
    }

    onSpeechRecognitionStart() {
        this.setState({
            speechRegnitionInProcess: true,
        });
    };

    setRecognizedSpeech(result) {
        this.setState({
            speechRegnitionInProcess: false,
            recognizedText: result.transcript,
        });

        console.log('text', this.state.recognizedText);
        this.refs.bubbleSlide.getNextAction();
    };

    render() {
        return (
            <BubbleSlide previous="speech-code" next="speech-recognition-code" ref={linkRef(this, 'bubbleSlide')}>
                <Bubble>So Sam, you know I can talk to you trough the browser, but did you know you can also talk to me? Thats right, I can understand the words you speak to me. Press the button below and say something.</Bubble>
                <BubbleCollection>
                    <SpeechRecognition onSpeechRecognitionStart={::this.onSpeechRecognitionStart} onSpeechRecognized={::this.setRecognizedSpeech}></SpeechRecognition>
                    {this.state.speechRegnitionInProcess && <Bubble me>
                        <Loader/>
                    </Bubble>}
                </BubbleCollection>
                <BubbleCollection>
                    <Bubble me>{this.state.recognizedText}</Bubble>
                    <Bubble>You would know how I’m doing if you wouldn’t be somewhere else all the time!</Bubble>
                </BubbleCollection>
            </BubbleSlide>
        );
    }
};