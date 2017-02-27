import * as React from 'react';

import { Button } from 'office-ui-fabric-react/lib/Button';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { Link } from 'office-ui-fabric-react/lib/Link';
import './CalloutExample.scss';

export interface ICalloutBasicExampleState {
  isCalloutVisible?: boolean;
}

export class CalloutBasicExample extends React.Component<any,ICalloutBasicExampleState>{
    private _menuButtonElement: HTMLElement;

    public constructor() {
        super();

        this._onShowMenuClicked = this._onShowMenuClicked.bind(this);
        this._onCalloutDismiss = this._onCalloutDismiss.bind(this);

        this.state = {isCalloutVisible: false};
    }

    public render(){
        let { isCalloutVisible } = this.state;

        return (
          
        <div className='ms-CalloutExample'>
            <div className='ms-CalloutBasicExample-buttonArea'
            ref={(menuButton) => this._menuButtonElement = menuButton}>
            <Button onClick={this._onShowMenuClicked}> 
                {isCalloutVisible ? 'Hide callout' : 'Show callout'} </Button>
            </div>

            { isCalloutVisible &&(
            <div className='CalloutContainer'>
                <Callout 
                    className='ms-CalloutExample-callout'
                    gapSpace={0}
                    targetElement={this._menuButtonElement}
                    onDismiss={this._onCalloutDismiss}
                    setInitialFocus={true}
                >
                    <div className='ms-CalloutExample-header'>
                        <p className='ms-CalloutExample-title'>
                            All your favorite people
                        </p>
                     </div>
                     <div className='ms-CalloutExample-inner'>
                        <div>
                            <p className='ms-CalloutExample-subText'>
                                Message body is optional.
                            </p>
                        </div>
                        <div className='ms-CalloutExample-actions'>
                            <Link className='ms-CalloutExample-link' href='http://microsoft.com'>Go to microsoft</Link>
                        </div>
                    </div>
                    

                </Callout>
                </div>

            )}

        </div>

        );
    }

    private _onShowMenuClicked(){
        this.setState({
            isCalloutVisible: !this.state.isCalloutVisible
        });
    }

    private _onCalloutDismiss(){
        this.setState({
            isCalloutVisible: false
        });
    }
}