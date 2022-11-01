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
      <View style={styles.View_624_12602}>
        <View style={styles.View_624_12603}>
          <View style={styles.View_624_12604} />
          <View style={styles.View_624_12605}>
            <View style={styles.View_I624_12605_119_97}>
              <Text style={styles.Text_I624_12605_119_97}>4:00</Text>
            </View>
            <View style={styles.View_I624_12605_119_98}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bbef1d9-f9d4-4118-8935-61ee4615e3ed"
                }}
                style={styles.ImageBackground_I624_12605_119_99}
              />
            </View>
            <View style={styles.View_I624_12605_119_104}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4471b045-8677-4862-b96e-da8b0b4773c6"
                }}
                style={styles.ImageBackground_I624_12605_119_105}
              />
            </View>
            <View style={styles.View_I624_12605_119_109}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5666cff3-fff1-41e3-a7ee-77a524e0a01d"
                }}
                style={styles.ImageBackground_I624_12605_119_110}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_624_12606}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("624_12322"))
            }
          >
            <View style={styles.View_I624_12606_19_13484}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c50f2a6-d2e4-4b70-bbe8-1ea9a4ca8b6b"
                }}
                style={styles.ImageBackground_I624_12606_19_13485}
              />
            </View>
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0d3b0ff-7543-4283-821a-8d6a6c71616a"
            }}
            style={styles.ImageBackground_624_12607}
          />
        </View>
        <View style={styles.View_624_12608}>
          <View style={styles.View_624_12609} />
          <View style={styles.View_624_12610}>
            <Text style={styles.Text_624_12610}>Home </Text>
          </View>
          <View style={styles.View_624_12611}>
            <Text style={styles.Text_624_12611}>Profile</Text>
          </View>
          <View style={styles.View_624_12612}>
            <Text style={styles.Text_624_12612}>Budget</Text>
          </View>
          <View style={styles.View_624_12613}>
            <Text style={styles.Text_624_12613}>Articles</Text>
          </View>
          <View style={styles.View_624_12614}>
            <View style={styles.View_I624_12614_19_14754}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52257830-685b-4c6e-b773-da980f1cba7e"
                }}
                style={styles.ImageBackground_I624_12614_19_14755}
              />
            </View>
          </View>
          <View style={styles.View_624_12615}>
            <View style={styles.View_I624_12615_19_9727}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16c80904-d569-49cf-9ad7-3caa4f3865f6"
                }}
                style={styles.ImageBackground_I624_12615_19_9728}
              />
            </View>
          </View>
          <View style={styles.View_624_12616}>
            <View style={styles.View_I624_12616_19_16252}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63fa7af6-1805-4ab4-b01d-96c98dab65fe"
                }}
                style={styles.ImageBackground_I624_12616_19_16253}
              />
            </View>
          </View>
          <View style={styles.View_624_12617}>
            <View style={styles.View_I624_12617_19_31105}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3eab1a90-4b03-4da6-bcaa-cbeb7a0e2f07"
                }}
                style={styles.ImageBackground_I624_12617_19_31106}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_624_12618}>
          <Text style={styles.Text_624_12618}>Password</Text>
        </View>
        <View style={styles.View_624_12619}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a804aab-cad6-4ce3-89d4-60bd039239a6"
            }}
            style={styles.ImageBackground_624_12620}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2889c38-132f-43ce-9b4b-6b8c394bc2fb"
            }}
            style={styles.ImageBackground_624_12621}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7443919d-7fed-4422-9d14-96e33a11942c"
            }}
            style={styles.ImageBackground_624_12622}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/837809ac-5c54-4f3c-a547-eca6bc710274"
            }}
            style={styles.ImageBackground_624_12623}
          />
          <View style={styles.View_624_12624}>
            <Text style={styles.Text_624_12624}>Change Password</Text>
          </View>
          <View style={styles.View_624_12625}>
            <Text style={styles.Text_624_12625}>Current Password</Text>
          </View>
          <View style={styles.View_624_12626}>
            <View style={styles.View_I624_12626_430_6123}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04a5cad7-879c-45f2-928c-2344fe86acfc"
                }}
                style={styles.ImageBackground_I624_12626_430_6124}
              />
            </View>
          </View>
          <View style={styles.View_624_12627}>
            <Text style={styles.Text_624_12627}>New Password</Text>
          </View>
          <View style={styles.View_624_12628}>
            <View style={styles.View_I624_12628_430_6123}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0764d52-5f78-4857-b6b6-c5fd0704ba91"
                }}
                style={styles.ImageBackground_I624_12628_430_6124}
              />
            </View>
          </View>
          <View style={styles.View_624_12629}>
            <Text style={styles.Text_624_12629}>Confirm Password</Text>
          </View>
          <View style={styles.View_624_12630}>
            <View style={styles.View_I624_12630_430_6123}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca494889-7017-4061-acee-5662990b9013"
                }}
                style={styles.ImageBackground_I624_12630_430_6124}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_624_12631}>
          <View style={styles.View_I624_12631_29_1323}>
            <View style={styles.View_I624_12631_29_1324} />
          </View>
          <View style={styles.View_I624_12631_29_1325}>
            <View style={styles.View_I624_12631_29_1326}>
              <View style={styles.View_I624_12631_29_1327} />
              <View style={styles.View_I624_12631_29_1328}>
                <Text style={styles.Text_I624_12631_29_1328}>Q</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1329}>
              <View style={styles.View_I624_12631_29_1330} />
              <View style={styles.View_I624_12631_29_1331}>
                <Text style={styles.Text_I624_12631_29_1331}>A</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1332}>
              <View style={styles.View_I624_12631_29_1333} />
              <View style={styles.View_I624_12631_29_1334}>
                <Text style={styles.Text_I624_12631_29_1334}>E</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1335}>
              <View style={styles.View_I624_12631_29_1336} />
              <View style={styles.View_I624_12631_29_1337}>
                <Text style={styles.Text_I624_12631_29_1337}>R</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1338}>
              <View style={styles.View_I624_12631_29_1339} />
              <View style={styles.View_I624_12631_29_1340}>
                <Text style={styles.Text_I624_12631_29_1340}>T</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1341}>
              <View style={styles.View_I624_12631_29_1342} />
              <View style={styles.View_I624_12631_29_1343}>
                <Text style={styles.Text_I624_12631_29_1343}>Y</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1344}>
              <View style={styles.View_I624_12631_29_1345} />
              <View style={styles.View_I624_12631_29_1346}>
                <Text style={styles.Text_I624_12631_29_1346}>U</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1347}>
              <View style={styles.View_I624_12631_29_1348} />
              <View style={styles.View_I624_12631_29_1349}>
                <Text style={styles.Text_I624_12631_29_1349}>I</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1350}>
              <View style={styles.View_I624_12631_29_1351} />
              <View style={styles.View_I624_12631_29_1352}>
                <Text style={styles.Text_I624_12631_29_1352}>O</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1353}>
              <View style={styles.View_I624_12631_29_1354} />
              <View style={styles.View_I624_12631_29_1355}>
                <Text style={styles.Text_I624_12631_29_1355}>P</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I624_12631_29_1356}>
            <View style={styles.View_I624_12631_29_1357}>
              <View style={styles.View_I624_12631_29_1358} />
              <View style={styles.View_I624_12631_29_1359}>
                <Text style={styles.Text_I624_12631_29_1359}>A</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1360}>
              <View style={styles.View_I624_12631_29_1361} />
              <View style={styles.View_I624_12631_29_1362}>
                <Text style={styles.Text_I624_12631_29_1362}>S</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1363}>
              <View style={styles.View_I624_12631_29_1364} />
              <View style={styles.View_I624_12631_29_1365}>
                <Text style={styles.Text_I624_12631_29_1365}>D</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1366}>
              <View style={styles.View_I624_12631_29_1367} />
              <View style={styles.View_I624_12631_29_1368}>
                <Text style={styles.Text_I624_12631_29_1368}>F</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1369}>
              <View style={styles.View_I624_12631_29_1370} />
              <View style={styles.View_I624_12631_29_1371}>
                <Text style={styles.Text_I624_12631_29_1371}>G</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1372}>
              <View style={styles.View_I624_12631_29_1373} />
              <View style={styles.View_I624_12631_29_1374}>
                <Text style={styles.Text_I624_12631_29_1374}>H</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1375}>
              <View style={styles.View_I624_12631_29_1376} />
              <View style={styles.View_I624_12631_29_1377}>
                <Text style={styles.Text_I624_12631_29_1377}>J</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1378}>
              <View style={styles.View_I624_12631_29_1379} />
              <View style={styles.View_I624_12631_29_1380}>
                <Text style={styles.Text_I624_12631_29_1380}>K</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1381}>
              <View style={styles.View_I624_12631_29_1382} />
              <View style={styles.View_I624_12631_29_1383}>
                <Text style={styles.Text_I624_12631_29_1383}>L</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I624_12631_29_1384}>
            <View style={styles.View_I624_12631_29_1385}>
              <View style={styles.View_I624_12631_29_1386} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ee836da-9340-4e22-868e-57809d2d734e"
                }}
                style={styles.ImageBackground_I624_12631_29_1387}
              />
            </View>
            <View style={styles.View_I624_12631_29_1388}>
              <View style={styles.View_I624_12631_29_1389}>
                <View style={styles.View_I624_12631_29_1390} />
                <View style={styles.View_I624_12631_29_1391}>
                  <Text style={styles.Text_I624_12631_29_1391}>Z</Text>
                </View>
              </View>
              <View style={styles.View_I624_12631_29_1392}>
                <View style={styles.View_I624_12631_29_1393} />
                <View style={styles.View_I624_12631_29_1394}>
                  <Text style={styles.Text_I624_12631_29_1394}>X</Text>
                </View>
              </View>
              <View style={styles.View_I624_12631_29_1395}>
                <View style={styles.View_I624_12631_29_1396} />
                <View style={styles.View_I624_12631_29_1397}>
                  <Text style={styles.Text_I624_12631_29_1397}>C</Text>
                </View>
              </View>
              <View style={styles.View_I624_12631_29_1398}>
                <View style={styles.View_I624_12631_29_1399} />
                <View style={styles.View_I624_12631_29_1400}>
                  <Text style={styles.Text_I624_12631_29_1400}>V</Text>
                </View>
              </View>
              <View style={styles.View_I624_12631_29_1401}>
                <View style={styles.View_I624_12631_29_1402} />
                <View style={styles.View_I624_12631_29_1403}>
                  <Text style={styles.Text_I624_12631_29_1403}>B</Text>
                </View>
              </View>
              <View style={styles.View_I624_12631_29_1404}>
                <View style={styles.View_I624_12631_29_1405} />
                <View style={styles.View_I624_12631_29_1406}>
                  <Text style={styles.Text_I624_12631_29_1406}>N</Text>
                </View>
              </View>
              <View style={styles.View_I624_12631_29_1407}>
                <View style={styles.View_I624_12631_29_1408} />
                <View style={styles.View_I624_12631_29_1409}>
                  <Text style={styles.Text_I624_12631_29_1409}>M</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1410}>
              <View style={styles.View_I624_12631_29_1411} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08984b78-cce9-4e55-a4c0-0a638a892d5f"
                }}
                style={styles.ImageBackground_I624_12631_29_1412}
              />
            </View>
          </View>
          <View style={styles.View_I624_12631_29_1413}>
            <View style={styles.View_I624_12631_29_1414}>
              <View style={styles.View_I624_12631_29_1415} />
              <View style={styles.View_I624_12631_29_1416}>
                <Text style={styles.Text_I624_12631_29_1416}>123</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1417}>
              <View style={styles.View_I624_12631_29_1418} />
              <View style={styles.View_I624_12631_29_1419}>
                <Text style={styles.Text_I624_12631_29_1419}>space</Text>
              </View>
            </View>
            <View style={styles.View_I624_12631_29_1420}>
              <View style={styles.View_I624_12631_29_1421} />
              <View style={styles.View_I624_12631_29_1422}>
                <Text style={styles.Text_I624_12631_29_1422}>return</Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46c2115e-5e31-4ba9-9c20-75155d259190"
            }}
            style={styles.ImageBackground_I624_12631_29_1423}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  View_624_12602: {
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
  View_624_12603: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12604: {
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
  View_624_12605: {
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
  View_I624_12605_119_97: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I624_12605_119_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I624_12605_119_98: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("2%")
  },
  ImageBackground_I624_12605_119_99: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I624_12605_119_104: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%")
  },
  ImageBackground_I624_12605_119_105: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I624_12605_119_109: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("2%")
  },
  ImageBackground_I624_12605_119_110: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_624_12606: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12606_19_13484: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12606_19_13485: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_624_12607: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("20%")
  },
  View_624_12608: {
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
  View_624_12609: {
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
  View_624_12610: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_624_12610: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12611: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_624_12611: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12612: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_624_12612: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12613: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_624_12613: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12614: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12614_19_14754: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12614_19_14755: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12615: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12615_19_9727: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12615_19_9728: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12616: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12616_19_16252: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12616_19_16253: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12617: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12617_19_31105: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12617_19_31106: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12618: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_624_12618: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12619: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_624_12620: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12621: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  ImageBackground_624_12622: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%")
  },
  ImageBackground_624_12623: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("34%")
  },
  View_624_12624: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("37%"),
    justifyContent: "center"
  },
  Text_624_12624: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12625: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_624_12625: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12626: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12626_430_6123: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I624_12626_430_6124: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12627: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_624_12627: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12628: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12628_430_6123: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I624_12628_430_6124: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12629: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("25%"),
    justifyContent: "center"
  },
  Text_624_12629: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12630: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12630_430_6123: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I624_12630_430_6124: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12631: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76%"),
    backgroundColor: "rgba(21, 21, 21, 0.8500000238418579)"
  },
  View_I624_12631_29_1323: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1324: {
    width: wp("34%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I624_12631_29_1325: {
    flexGrow: 1,
    width: wp("97%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1326: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1327: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1328: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1328: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1329: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1330: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1331: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1331: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1332: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1333: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1334: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1334: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1335: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1336: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1337: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1337: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1338: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1339: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1340: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1340: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1341: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1342: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1343: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1343: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1344: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1345: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1346: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1346: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1347: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1348: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1349: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1349: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1350: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1351: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1352: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1352: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1353: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1354: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1355: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1355: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1356: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1357: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1358: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1359: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1359: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1360: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1361: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1362: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1362: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1363: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1364: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1365: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1365: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1366: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1367: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1368: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1368: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1369: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1370: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1371: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1371: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1372: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1373: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1374: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1374: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1375: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1376: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1377: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1377: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1378: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1379: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1380: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1380: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1381: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1382: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1383: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1383: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1384: {
    flexGrow: 1,
    width: wp("98%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1385: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1386: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  ImageBackground_I624_12631_29_1387: {
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_I624_12631_29_1388: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1389: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1390: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1391: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1391: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1392: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1393: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1394: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1394: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1395: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1396: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1397: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1397: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1398: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1399: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1400: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1401: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1402: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1403: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1403: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1404: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1405: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1406: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1406: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1407: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1408: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1409: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1409: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12631_29_1410: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1411: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  ImageBackground_I624_12631_29_1412: {
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_I624_12631_29_1413: {
    flexGrow: 1,
    width: wp("97%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1414: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1415: {
    width: wp("22%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  View_I624_12631_29_1416: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1416: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I624_12631_29_1417: {
    width: wp("51%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1418: {
    width: wp("51%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12631_29_1419: {
    flexGrow: 1,
    width: wp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1419: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I624_12631_29_1420: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12631_29_1421: {
    width: wp("22%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  View_I624_12631_29_1422: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I624_12631_29_1422: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  ImageBackground_I624_12631_29_1423: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("32%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
