import { connect } from "react-redux";
import { selectPerson, fetchPeople } from "store/actions/people";

const LandingPage = ({ people, selectedPerson, selectPerson, fetchPeople }) => (
  <div>
    <div>Hey, bro!</div>
    <button onClick={() => fetchPeople()}>Get Data</button>
    <ul>
      {people.map(p => (
        <li
          key={p.id}
          onClick={selectPerson(p.id)}
          style={selectedPerson == p.id ? { color: "red" } : {}}
        >
          {p.name}
        </li>
      ))}
    </ul>
  </div>
);

LandingPage.getInitialProps = async ({ store }) => {
  await store.dispatch(fetchPeople);
};

const mapStateToProps = state => {
  return {
    people: state.people?.people || [],
    selectedPerson: state.people.selectedPerson
  };
};

const mapDispatchToProps = { selectPerson, fetchPeople };

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
