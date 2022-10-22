export default function Login() {
    const { data: session } = useSession()
    console.log(session)

        if (session) {
            return (
              <>
                <p>Welcome, {session.user.name}</p>
                <img src={session.user.image} alt="" styles={{ width: "75", borderRadius: "50px"}} />
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
              </>
            )
          }
          return (
            <>
              Not signed in <br />
              <button onClick={() => signIn()}>Sign in</button>
            </>
          )
    }

