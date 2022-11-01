import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_624_12958}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09d5bc56-229a-4b86-8653-8e36b71a29bd"
          }}
          style={styles.ImageBackground_624_12959}
        />
        <View style={styles.View_624_12960} />
        <View style={styles.View_624_12961}>
          <View style={styles.View_I624_12961_119_97}>
            <Text style={styles.Text_I624_12961_119_97}>4:00</Text>
          </View>
          <View style={styles.View_I624_12961_119_98}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34f342a9-cabb-44a0-9af0-be54a858389e"
              }}
              style={styles.ImageBackground_I624_12961_119_99}
            />
          </View>
          <View style={styles.View_I624_12961_119_104}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bcce33db-4b23-4c3b-9f6b-5c4df4ca9efc"
              }}
              style={styles.ImageBackground_I624_12961_119_105}
            />
          </View>
          <View style={styles.View_I624_12961_119_109}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28c5e734-0b07-4dec-a42b-089ba66568d7"
              }}
              style={styles.ImageBackground_I624_12961_119_110}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_624_12962}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("712_6955"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5512a373-b178-4d66-845c-093c42d17079"
            }}
            style={styles.ImageBackground_624_12963}
          />
          <View style={styles.View_624_12964}>
            <Text style={styles.Text_624_12964}>Edit Budget</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_624_12965}>
          <View style={styles.View_624_12966} />
          <View style={styles.View_624_12967}>
            <View style={styles.View_624_12968}>
              <Text style={styles.Text_624_12968}>Budget</Text>
            </View>
            <View style={styles.View_624_12969}>
              <View style={styles.View_I624_12969_19_9727}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b937a7af-39f8-44f3-8b21-9cbade504156"
                  }}
                  style={styles.ImageBackground_I624_12969_19_9728}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_624_12970}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("624_12322"))
            }
          >
            <View style={styles.View_624_12971}>
              <Text style={styles.Text_624_12971}>Profile</Text>
            </View>
            <View style={styles.View_624_12972}>
              <View style={styles.View_I624_12972_19_14754}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09a0c9a7-1fee-4485-ab16-5fed89a1f113"
                  }}
                  style={styles.ImageBackground_I624_12972_19_14755}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_624_12973}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("733_9124"))
            }
          >
            <View style={styles.View_624_12974}>
              <Text style={styles.Text_624_12974}>Home </Text>
            </View>
            <View style={styles.View_624_12975}>
              <View style={styles.View_I624_12975_19_31105}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/135b37b0-7f58-4d5c-8793-7f5f17ab8b7f"
                  }}
                  style={styles.ImageBackground_I624_12975_19_31106}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_624_12976}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("624_12684"))
            }
          >
            <View style={styles.View_624_12977}>
              <Text style={styles.Text_624_12977}>Articles</Text>
            </View>
            <View style={styles.View_624_12978}>
              <View style={styles.View_I624_12978_19_16252}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a99e1fe-aa9a-4f9d-9a78-f0368b30ea9d"
                  }}
                  style={styles.ImageBackground_I624_12978_19_16253}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_624_12979}>
          <View style={styles.View_624_12980} />
          <View style={styles.View_624_12981}>
            <Text style={styles.Text_624_12981}>1099</Text>
          </View>
          <View style={styles.View_624_12982} />
          <View style={styles.View_624_12983}>
            <Text style={styles.Text_624_12983}>W2</Text>
          </View>
          <View style={styles.View_624_12984} />
          <View style={styles.View_624_12985} />
          <View style={styles.View_624_12986} />
          <View style={styles.View_624_12987} />
          <View style={styles.View_624_12988} />
          <View style={styles.View_624_12989}>
            <Text style={styles.Text_624_12989}>Income </Text>
          </View>
          <View style={styles.View_624_12990}>
            <Text style={styles.Text_624_12990}>$5500</Text>
          </View>
          <View style={styles.View_624_12991}>
            <Text style={styles.Text_624_12991}>Daily Earning</Text>
          </View>
          <View style={styles.View_624_12992}>
            <Text style={styles.Text_624_12992}>$183.33</Text>
          </View>
          <View style={styles.View_624_12993}>
            <Text style={styles.Text_624_12993}>Daily Spending Limit</Text>
          </View>
          <View style={styles.View_624_12994}>
            <Text style={styles.Text_624_12994}>$100</Text>
          </View>
          <View style={styles.View_624_12995}>
            <Text style={styles.Text_624_12995}>Daily Expenses</Text>
          </View>
          <View style={styles.View_624_12996}>
            <Text style={styles.Text_624_12996}>$83.33</Text>
          </View>
          <View style={styles.View_624_12997}>
            <Text style={styles.Text_624_12997}>Daily Savings Goal</Text>
          </View>
          <View style={styles.View_624_12998}>
            <Text style={styles.Text_624_12998}>$40.00</Text>
          </View>
          <View style={styles.View_624_12999}>
            <View style={styles.View_I624_12999_19_39128}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/950ded33-f8dd-43ee-8763-ac9ae13b78a5"
                }}
                style={styles.ImageBackground_I624_12999_19_39129}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_624_13000} />
        <View style={styles.View_624_13001}>
          <Text style={styles.Text_624_13001}>Expenses</Text>
        </View>
        <View style={styles.View_624_13002}>
          <Text style={styles.Text_624_13002}>$4500</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  View_624_12958: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    overflow: "hidden"
  },
  ImageBackground_624_12959: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    resizeMode: "cover"
  },
  View_624_12960: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(27, 33, 36, 1)"
  },
  View_624_12961: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12961_119_97: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I624_12961_119_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I624_12961_119_98: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("2%")
  },
  ImageBackground_I624_12961_119_99: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I624_12961_119_104: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%")
  },
  ImageBackground_I624_12961_119_105: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I624_12961_119_109: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("2%")
  },
  ImageBackground_I624_12961_119_110: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_624_12962: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("96%")
  },
  ImageBackground_624_12963: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12964: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_624_12964: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12965: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104%")
  },
  View_624_12966: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(27, 33, 36, 1)"
  },
  View_624_12967: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("2%")
  },
  View_624_12968: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_624_12968: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12969: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12969_19_9727: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12969_19_9728: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_624_12970: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("2%")
  },
  View_624_12971: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_624_12971: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12972: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12972_19_14754: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12972_19_14755: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_624_12973: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  View_624_12974: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_624_12974: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12975: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12975_19_31105: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12975_19_31106: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_624_12976: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("2%")
  },
  View_624_12977: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_624_12977: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12978: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12978_19_16252: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12978_19_16253: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12979: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65%"),
    minHeight: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%")
  },
  View_624_12980: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_624_12981: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_624_12981: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12982: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_624_12983: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_624_12983: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12984: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_624_12985: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_624_12986: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_624_12987: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_624_12988: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_624_12989: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_624_12989: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12990: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_624_12990: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12991: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_624_12991: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12992: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_624_12992: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12993: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("40%"),
    justifyContent: "center"
  },
  Text_624_12993: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12994: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("40%"),
    justifyContent: "center"
  },
  Text_624_12994: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12995: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("49%"),
    justifyContent: "center"
  },
  Text_624_12995: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12996: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("49%"),
    justifyContent: "center"
  },
  Text_624_12996: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12997: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("59%"),
    justifyContent: "center"
  },
  Text_624_12997: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12998: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("58%"),
    justifyContent: "center"
  },
  Text_624_12998: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12999: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12999_19_39128: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12999_19_39129: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_13000: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_624_13001: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("51%"),
    justifyContent: "center"
  },
  Text_624_13001: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_13002: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("51%"),
    justifyContent: "center"
  },
  Text_624_13002: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
