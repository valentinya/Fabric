import * as React from 'react';

import {CalloutBasicExample} from './Callout.Basic.Example'
import {
  ExampleCard,
  ComponentPage,
  PropertiesTableSet
} from '@uifabric/example-app-base';

const CalloutBasicExampleCode = require('./Callout.Basic.Example.tsx') as string;

export default class CalloutPage extends React.Component<any, any>{

    public constructor(){
        super();
    }

    public render(){

        return(
        <ComponentPage
        title='Callout'
        componentName='CalloutExample'
        exampleCards={
          <div>
    
            <ExampleCard title='Simple callout' code={ CalloutBasicExampleCode }>
              <CalloutBasicExample />
            </ExampleCard>
               
            </div>
             }
        propertiesTables={
          <div>
            <PropertiesTableSet
              sources={ [
                require('office-ui-fabric-react/lib/components/Callout/Callout.Props.ts')
              ] }
            />
            <p>Besides the above properties, the <code>Callout</code> component accepts all properties that the React <code>button</code> and <code>a</code> components accept.</p>
          </div>
        }
           overview={
          <div>
            overview
          </div>
        }
>
        </ComponentPage>



        );
    }
}