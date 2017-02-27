import * as React from 'react';
import './App.css';

import {
  Breadcrumb,IBreadcrumbItem
} from 'office-ui-fabric-react/lib/Breadcrumb';
import {
  CommandButton,
   PrimaryButton, 
   DefaultButton,
   IconButton, 
   IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
class App extends React.Component<IButtonProps, any> {

    constructor() {
        super();
        this._onBreadcrumbItemClicked = this._onBreadcrumbItemClicked.bind(this);
    }

  

  render() {
    let { disabled } = this.props;

    return (
      <div>
        Hei
        <div >
        <Label>Primary button</Label>
        <PrimaryButton
          data-automation-id='test'
          disabled={ disabled }
        >Create account</PrimaryButton>
         <Label>Button like anchor</Label>
        <PrimaryButton
          data-automation-id='test'
          disabled={ disabled }
          href='http://bing.com'
          target='_blank'
          title='Let us bing!'>
          Bing
        </PrimaryButton>
         <Label>Command button</Label>
        <CommandButton
          data-automation-id='test'
          icon='AddFriend'
          disabled={ disabled }
        >
          Create account
        </CommandButton>
         <Label>Default button</Label>
          <DefaultButton
            data-automation-id='test'
            disabled={ disabled }
            icon='Add'
            description='I am a description'
            label='Create account'
          />
  <Label>Icon button</Label>
        <IconButton
          disabled={ disabled }
          icon='Emoji2'
          title='Emoji'
          ariaLabel='Emoji' />
<Label>Button with aria description for screen reader</Label>
        <PrimaryButton
          data-automation-id='test'
          disabled={ disabled }
          ariaDescription='This is aria description used for screen reader.'>
          Aria Description
        </PrimaryButton>
      </div>


      <div>
        <Breadcrumb 
                    items={[
                        { text: 'Files', 'key': 'Files', onClick: this._onBreadcrumbItemClicked },
                        { text: 'This is folder 1', 'key': 'f1', onClick: this._onBreadcrumbItemClicked },
                        { text: 'This is folder 2', 'key': 'f2', onClick: this._onBreadcrumbItemClicked },
                        { text: 'This is folder 3', 'key': 'f3', onClick: this._onBreadcrumbItemClicked },
                        { text: 'This is folder 4', 'key': 'f4', onClick: this._onBreadcrumbItemClicked },
                        { text: 'This is folder 5', 'key': 'f5', onClick: this._onBreadcrumbItemClicked }
                    ]}
                    maxDisplayedItems = {3}
                />

                 <Breadcrumb
                    items={[
                        { 
                            text: 'Files',
                            'key': 'Files', 
                            href: '#/breadcrumb', 
                            onClick: this._onBreadcrumbItemClicked 
                        },
                        { 
                            text: 'This is link 1', 
                            'key': 'l1',
                             href: '#/breadcrumb', 
                             onClick: this._onBreadcrumbItemClicked 
                        },
                        { 
                            text: 'This is link 2', 
                            'key': 'l2', 
                            href: '#/breadcrumb', 
                            onClick: this._onBreadcrumbItemClicked 
                        },
                        { 
                            text: 'This is link 3', 
                            'key': 'l3', 
                            href: '#/breadcrumb', 
                            onClick: this._onBreadcrumbItemClicked 
                        },
                        { 
                            text: 'This is link 4', 
                            'key': 'l4', 
                            href: '#/breadcrumb', 
                            onClick: this._onBreadcrumbItemClicked 
                        },
                        { 
                            text: 'This is link 5', 
                            'key': 'l5', 
                            href: '#/breadcrumb', 
                            onClick: this._onBreadcrumbItemClicked 
                        },
                    ]}
                    maxDisplayedItems={3} 
                />
                </div>
      </div>
    );
  }

  
    private _onBreadcrumbItemClicked(event: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem) {
        console.log(`Breadcrumb item with key "${item.key}" has been clicked.`);

    }
}

export default App;
