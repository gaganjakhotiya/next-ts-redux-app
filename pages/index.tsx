import { connect } from "react-redux";
import { selectPerson, fetchPeople } from "store/actions/people";
import Table from "../components/table";

const LandingPage = ({ people, selectedPerson, selectPerson, fetchPeople }) => (
  <div>
    <h2 className="title">People Directory</h2>
    <Table rows={people} />
    <style jsx>{`
      .title {
        color: #fff;
        font-family: Roboto;
        margin: 20px auto;
        text-align: center;
        font-size: 32px;
      }
    `}</style>
  </div>
);

LandingPage.getInitialProps = async ({ store }) => {
  await store.dispatch(fetchPeople());
};

const mapStateToProps = state => {
  return {
    people: state.people?.people || [],
    selectedPerson: state.people.selectedPerson
  };
};

const mapDispatchToProps = { selectPerson, fetchPeople };

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
