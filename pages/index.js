

const Index = ()=>{

    return(
        <p>Redirecting</p>
    )
}

export async function getServerSideProps({ query }) {
    const { id } = query || {};
    if (!id) {
      return {
        redirect: {
          destination: '/dashboard/sender',
          permanent: false,
        },
      };
    } else {
      return {
        props: { id }, // will be passed to the page component as props
      };
    }
  }

export default Index