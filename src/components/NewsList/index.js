import React from "react";
import { db } from "../../Firebase";
import NewsItem from "../NewsItem";
import LeadNewsItem from "../../components/LeadNewsItem";

class NewsListDB extends React.Component {
  state = {
    loading: true,
    message: "",
    news: []
  };

  // can't seem to set state from inside the query
  // so we do it outside in this function
  onCollectionUpdate = querySnapshot => {
    const docs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    }));

    this.setState({
      news: docs,
      loading: false
    });
  };

  componentDidMount() {
    db.collection("news")
      .where("draft", "==", false)
      .orderBy("datetime", "desc")
      .limit(20)
      .get()
      .then(this.onCollectionUpdate)
      .catch(function(error) {
        this.setState({
          message: "Error getting documents: " + error
        });
      });
  }

  render() {
    const { news, message, loading } = this.state;
    let firstItem;
    if (news) {
      firstItem = news.shift();
    }
    return (
      <>
        {loading ? (
          <>
            <h3>Loading...</h3>
            <h3>{message}</h3>
          </>
        ) : (
          <>
            <LeadNewsItem item={firstItem} />
            <h1 className="display-6 mb-2 mt-4">All Stories</h1>
            <hr />
            {news.map(doc => (
              <NewsItem item={doc} index={doc.id} key={doc.id} />
            ))}
          </>
        )}
      </>
    );
  }
}

export default NewsListDB;
