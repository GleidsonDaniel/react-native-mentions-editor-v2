import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, FlatList, Animated, View } from "react-native";

import MentionListItem from "../MentionListItem";
// Styles
import styles from "./MentionListStyles";

export class MentionList extends React.PureComponent {
  static propTypes = {
    list: PropTypes.array,
    editorStyles: PropTypes.object,
    isTrackingStarted: PropTypes.bool,
    suggestions: PropTypes.array,
    keyword: PropTypes.string,
    onSuggestionTap: PropTypes.func
  };

  constructor() {
    super();
    this.previousChar = " ";
  }

  renderSuggestionsRow = ({ item }) => {
    return (
      <MentionListItem
        onSuggestionTap={this.props.onSuggestionTap}
        item={item}
        editorStyles={this.props.editorStyles}
      />
    );
  };
  render() {
    const { props } = this;

    const { keyword, isTrackingStarted } = props;
    const withoutAtKeyword = keyword.substr(1, keyword.length);
    const list = this.props.list;
    const suggestions =
      withoutAtKeyword !== ""
        ? list.filter(user => user.username.toLowerCase().includes(withoutAtKeyword.toLowerCase()))
        : list;
    if (!isTrackingStarted) {
      return null;
    }
    return (
      <Animated.View
        style={[
          { ...styles.suggestionsPanelStyle },
          this.props.editorStyles.mentionsListWrapper
        ]}
      >
        <FlatList
          style={styles.mentionsListContainer}
          keyboardShouldPersistTaps={"always"}
          horizontal={false}
          enableEmptySections={true}
          data={suggestions}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={rowData => {
            return this.renderSuggestionsRow(rowData);
          }}
          nestedScrollEnabled={true}
        />
      </Animated.View>
    );
  }
}

export default MentionList;
