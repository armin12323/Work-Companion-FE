import { Show, SignInButton, SignUpButton, UserButton, ClerkProvider, useUser } from '@clerk/react'
import { MainNotesView } from './components/main-notes-view'
import "./index.css"


export default function App() {

  return (
    <>
      <div id='sign-in-div'>

        <header>
          <Show when="signed-out">
            <div id='signed-out-div' className='sign-in-div'>
              <center>
                <div>Sign in if you have an account, twerp.</div>
                <SignInButton />
                <div>If you arent signed up, wtf?</div>
                <SignUpButton />
              </center>
            </div>
            
            
          </Show>
          
          <Show when="signed-in">
            <UserButton appearance={{
                        elements: {
                          rootBox: {
                            position: "fixed",
                            right: 20
                          },
                        },
                      }}/>
            <h1>Work Companion</h1>
            <MainNotesView />
          </Show>
        </header>

      </div>
    </>
  )

}