import { Component } from "react"
import React from 'react';
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import { RiSearchLine } from "react-icons/ri"

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { showSearch: false }
    this.handleToggleClick = this.handleToggleClick.bind(this)
    this.state = {
      query: ``,
      results: [],
    }
  }

  handleToggleClick() {
    this.setState(state => ({
      showSearch: !state.showSearch,
    }))
  }

  render() {
    return (

        <div>
          <button
            onClick={this.handleToggleClick}
            className={this.state.showSearch ? "search is-active" : "search"}
          >
            <RiSearchLine />
          </button>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              value={this.state.query}
              onChange={this.search}
              className="search-input"
            />
            <ul>
              {this.state.results.map(page => (
                <li key={page.id}>
                  {page.template === "blog-post" ? (
                    <Link to={page.slug}>{page.title}</Link>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

    )
  }

  getOrCreateIndex = () =>
    this.index ? this.index : Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      results: this.index
        .search(query, {})
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}