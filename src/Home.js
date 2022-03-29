import HomeContent from "./HomeContent";
import HomeContent2 from "./HomeContent2";
const Home = () =>{
     return(
         <>
         <div className="columns">
            <div className="column1">
                <div className="column1Content">
                    <h1>Declarative</h1>
                    <HomeContent text="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."/>
                    <HomeContent text="Declarative views make your code more predictable and easier to debug."/>
                </div>
            </div>

            <div className="column2">
                <div className="column2Content">
                    <h1>Component-Based</h1>
                    <HomeContent text="Build encapsulated components that manage their own state, then compose them to make complex UIs."/>
                    <HomeContent text="Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."/>
                </div>
            </div>

            <div className="column3">
                <div className="column3Content">
                    <h1>Learn Once, Write Anywhere</h1>
                    <HomeContent text="We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code."/>
                    <HomeContent text="React can also render on the server using Node and power mobile apps using React Native.">
                        <mark>Special content created by using special props(props childern)</mark>
                    </HomeContent>
                </div>
            </div>

         </div>

         <div className="homecontentsec2">
             <HomeContent2 />
         </div>
           
         </>
     );
}

export default Home;