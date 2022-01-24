import RepoListItem from "./RepoListItem";

const RepoList = (props) => {
    return (
        <ul>
            <RepoListItem reposData={props.reposData}  deleteRepo={props.deleteRepo}/>
        </ul>
    )
};

export default RepoList;