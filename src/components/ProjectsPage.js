import React from 'react';

const ProjectsPage = (props) => (
    <div>
        This is a single project page;
        it is my project nr {props.match.params.id}
    </div>
);

export default ProjectsPage;