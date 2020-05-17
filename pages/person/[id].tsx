import { connect } from "react-redux";
import { fetchPeople } from "store/actions/people";
import { useRouter } from "next/router";
import Router from "next/router";
import { Person } from "typedefs";
import { Button } from "@material-ui/core";

const PersonPage = ({ person }: { person: Person }) => {
  return (
    <div>
      <h2 className="title">About: {person.name}</h2>
      <div>
        <h3 className="tag">Available address:</h3>
        {person.addresses?.map((a, i) => (
          <div className="address" key={i}>
            <div>{a.locality}</div>
            <div>{a.city}</div>
            <div>{a.state}</div>
            <div>{a.pincode}</div>
            <div>{a.country}</div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Button
        onClick={() => Router.back()}
        color="secondary"
        variant="outlined"
      >
        {"< Go Back"}
      </Button>
      <style jsx>{`
        * {
          color: #fff;
          font-family: Roboto;
        }
        .title {
          margin: 20px auto;
          text-align: center;
          font-size: 32px;
        }
        .tag {
          margin: 20px auto;
          font-size: 18px;
        }
        .address div {
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};

PersonPage.getInitialProps = async ({ store }) => {
  await store.dispatch(fetchPeople());
};

const mapStateToProps = state => {
  const router = useRouter();
  const { id } = router.query;
  return {
    person: state.people?.people?.filter(p => String(p.id) === id)[0]
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PersonPage);
