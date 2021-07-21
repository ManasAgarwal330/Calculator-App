import React from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView,Animated} from 'react-native';

function History(props) {
  const buttonRipple = {
    color:'white',
    radius:60,
  }
  return (
    <View style={styles.historyContainer}>
      <View style={styles.historyShow}>
        <View style={styles.historyHeader}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>History</Text>
          <Pressable onPress={props.clearArr} android_ripple={buttonRipple}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Clear</Text>
          </Pressable>
        </View>
        <ScrollView style={styles.scrollTab}>
          {props.resultArr.map((items) => {
            return (
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }}>
                <Text style={{ fontSize: 20 }}>
                  {items.expression}={items.result}
                </Text>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.closeTab}>
          <Pressable onPress={props.hButtonClick} android_ripple={buttonRipple}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Close</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.emptyContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  historyContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,
    flex: 1,
  },
  historyShow: {
    flex: 8,
    backgroundColor: '#add8e6',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  emptyContainer: {
    flex: 2,
  },
  historyHeader: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  scrollTab: {
    flex: 1,
  },
  closeTab: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    borderTopColor: 'black',
    borderTopWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default History;
