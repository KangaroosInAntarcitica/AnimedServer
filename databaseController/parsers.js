const parseArticleInfo = (articleInfo) => {
    let {name, content, id, userArticles} = articleInfo;
    let result = {name, content, id};

    userArticles.forEach(({isAuthor, rating, completed, user}) => {
        if (isAuthor) {
            result.author = user;
        } else {
            result = {...result, rating, completed};
        }
    });

    return result;
};


const parseCourseInfo = (courseInfo) => {
    let {name, description, id, userCourses} = courseInfo;
    let result = {name, description, id};

    userCourses.forEach(({isAuthor, rating, user}) => {
        if (isAuthor) {
            result.author = user;
        } else {
            result = {...result, rating};
        }
    });

    return result;
};

const parseSectionInfo = (sectionInfo) => {
    const {id, name, description, sectionArticles} = sectionInfo;
    let result = {id, name, description};

    result.articles = sectionArticles.map(({article}) => parseArticleInfo(article));
    return result;
};

module.exports = {
    parseArticleInfo, parseCourseInfo, parseSectionInfo
};
