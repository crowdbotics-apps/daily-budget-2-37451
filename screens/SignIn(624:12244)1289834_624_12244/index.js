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
      <View style={styles.View_624_12245} />
      <View style={styles.View_624_12246}>
        <View style={styles.View_I624_12246_119_97}>
          <Text style={styles.Text_I624_12246_119_97}>4:00</Text>
        </View>
        <View style={styles.View_I624_12246_119_98}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e64ad2e-a27c-4711-b392-b46c5c901833"
            }}
            style={styles.ImageBackground_I624_12246_119_99}
          />
        </View>
        <View style={styles.View_I624_12246_119_104}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c76c381-a55f-4026-99ba-22f402cf0dce"
            }}
            style={styles.ImageBackground_I624_12246_119_105}
          />
        </View>
        <View style={styles.View_I624_12246_119_109}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d53b48b0-f39f-481a-b0bb-61086951e5af"
            }}
            style={styles.ImageBackground_I624_12246_119_110}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3a1ea70-2cc6-42cd-9848-dc06d22b5066"
        }}
        style={styles.ImageBackground_624_12247}
      />
      <View style={styles.View_624_12248}>
        <Text style={styles.Text_624_12248}>Johnsmith@Dailybudget.com</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5529e51-9c41-459b-a0fe-58ecd478a575"
        }}
        style={styles.ImageBackground_624_12249}
      />
      <View style={styles.View_624_12250}>
        <View style={styles.View_I624_12250_430_6265}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/871eed7b-e36f-43f9-8154-4c8ae3d208f9"
            }}
            style={styles.ImageBackground_I624_12250_430_6266}
          />
        </View>
      </View>
      <View style={styles.View_624_12251}>
        <View style={styles.View_I624_12251_430_6123}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18000752-b543-4545-90a5-4f1ffdf6f965"
            }}
            style={styles.ImageBackground_I624_12251_430_6124}
          />
        </View>
      </View>
      <View style={styles.View_624_12252}>
        <Text style={styles.Text_624_12252}>**********</Text>
      </View>
      <View style={styles.View_624_12253}>
        <Text style={styles.Text_624_12253}>Remember me</Text>
      </View>
      <View style={styles.View_624_12254}>
        <Text style={styles.Text_624_12254}>Forgot Password?</Text>
      </View>
      <View style={styles.View_624_12255}>
        <Text style={styles.Text_624_12255}>
          Take control of your life by taking control of your finances
        </Text>
      </View>
      <View style={styles.View_624_12256}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08ba312b-8109-4f28-b05a-7d98c896142f"
          }}
          style={styles.ImageBackground_624_12257}
        />
      </View>
      <View style={styles.View_624_12266}>
        <View style={styles.View_I624_12266_19_31181}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce1b1965-ecf0-4e61-be08-49700f16f51a"
            }}
            style={styles.ImageBackground_I624_12266_19_31182}
          />
        </View>
      </View>
      <View style={styles.View_624_12267}>
        <View style={styles.View_624_12268} />
        <View style={styles.View_624_12269}>
          <Text style={styles.Text_624_12269}>Sign In</Text>
        </View>
      </View>
      <View style={styles.View_624_12270}>
        <Text style={styles.Text_624_12270}>
          Dont have an account? Sign up now
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93763036-0e71-42dc-b2d3-dabf72130893"
        }}
        style={styles.ImageBackground_624_12271}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ba62258-e960-4444-ae80-d06242fec9f2"
        }}
        style={styles.ImageBackground_624_12272}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1b0a045-886e-4271-a037-e50afaa999d0"
        }}
        style={styles.ImageBackground_624_12273}
      />
      <View style={styles.View_624_12274}>
        <Text style={styles.Text_624_12274}>Facebook</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9dc7dc9-867a-42c2-b9a5-72388cdaedf6"
        }}
        style={styles.ImageBackground_624_12275}
      />
      <View style={styles.View_624_12276}>
        <Text style={styles.Text_624_12276}>Google</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ddbb79f-b0dd-426d-9ed4-5d264e7a2a44"
        }}
        style={styles.ImageBackground_624_12277}
      />
      <View style={styles.View_624_12278}>
        <Text style={styles.Text_624_12278}>Apple ID</Text>
      </View>
      <View style={styles.View_624_12279}>
        <Text style={styles.Text_624_12279}>Sign in with</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4c3e407-a57e-4967-a8d2-40e169c853a5"
        }}
        style={styles.ImageBackground_624_12280}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c621381c-8fd5-4674-82b3-003e6ffa1614"
        }}
        style={styles.ImageBackground_624_12281}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fd183cb-ebab-4584-bf3c-69d81cdc97d6"
        }}
        style={styles.ImageBackground_624_12282}
      />
      <View style={styles.View_624_12283}>
        <View style={styles.View_I624_12283_29_1323}>
          <View style={styles.View_I624_12283_29_1324} />
        </View>
        <View style={styles.View_I624_12283_29_1325}>
          <View style={styles.View_I624_12283_29_1326}>
            <View style={styles.View_I624_12283_29_1327} />
            <View style={styles.View_I624_12283_29_1328}>
              <Text style={styles.Text_I624_12283_29_1328}>Q</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1329}>
            <View style={styles.View_I624_12283_29_1330} />
            <View style={styles.View_I624_12283_29_1331}>
              <Text style={styles.Text_I624_12283_29_1331}>A</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1332}>
            <View style={styles.View_I624_12283_29_1333} />
            <View style={styles.View_I624_12283_29_1334}>
              <Text style={styles.Text_I624_12283_29_1334}>E</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1335}>
            <View style={styles.View_I624_12283_29_1336} />
            <View style={styles.View_I624_12283_29_1337}>
              <Text style={styles.Text_I624_12283_29_1337}>R</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1338}>
            <View style={styles.View_I624_12283_29_1339} />
            <View style={styles.View_I624_12283_29_1340}>
              <Text style={styles.Text_I624_12283_29_1340}>T</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1341}>
            <View style={styles.View_I624_12283_29_1342} />
            <View style={styles.View_I624_12283_29_1343}>
              <Text style={styles.Text_I624_12283_29_1343}>Y</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1344}>
            <View style={styles.View_I624_12283_29_1345} />
            <View style={styles.View_I624_12283_29_1346}>
              <Text style={styles.Text_I624_12283_29_1346}>U</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1347}>
            <View style={styles.View_I624_12283_29_1348} />
            <View style={styles.View_I624_12283_29_1349}>
              <Text style={styles.Text_I624_12283_29_1349}>I</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1350}>
            <View style={styles.View_I624_12283_29_1351} />
            <View style={styles.View_I624_12283_29_1352}>
              <Text style={styles.Text_I624_12283_29_1352}>O</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1353}>
            <View style={styles.View_I624_12283_29_1354} />
            <View style={styles.View_I624_12283_29_1355}>
              <Text style={styles.Text_I624_12283_29_1355}>P</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I624_12283_29_1356}>
          <View style={styles.View_I624_12283_29_1357}>
            <View style={styles.View_I624_12283_29_1358} />
            <View style={styles.View_I624_12283_29_1359}>
              <Text style={styles.Text_I624_12283_29_1359}>A</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1360}>
            <View style={styles.View_I624_12283_29_1361} />
            <View style={styles.View_I624_12283_29_1362}>
              <Text style={styles.Text_I624_12283_29_1362}>S</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1363}>
            <View style={styles.View_I624_12283_29_1364} />
            <View style={styles.View_I624_12283_29_1365}>
              <Text style={styles.Text_I624_12283_29_1365}>D</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1366}>
            <View style={styles.View_I624_12283_29_1367} />
            <View style={styles.View_I624_12283_29_1368}>
              <Text style={styles.Text_I624_12283_29_1368}>F</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1369}>
            <View style={styles.View_I624_12283_29_1370} />
            <View style={styles.View_I624_12283_29_1371}>
              <Text style={styles.Text_I624_12283_29_1371}>G</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1372}>
            <View style={styles.View_I624_12283_29_1373} />
            <View style={styles.View_I624_12283_29_1374}>
              <Text style={styles.Text_I624_12283_29_1374}>H</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1375}>
            <View style={styles.View_I624_12283_29_1376} />
            <View style={styles.View_I624_12283_29_1377}>
              <Text style={styles.Text_I624_12283_29_1377}>J</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1378}>
            <View style={styles.View_I624_12283_29_1379} />
            <View style={styles.View_I624_12283_29_1380}>
              <Text style={styles.Text_I624_12283_29_1380}>K</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1381}>
            <View style={styles.View_I624_12283_29_1382} />
            <View style={styles.View_I624_12283_29_1383}>
              <Text style={styles.Text_I624_12283_29_1383}>L</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I624_12283_29_1384}>
          <View style={styles.View_I624_12283_29_1385}>
            <View style={styles.View_I624_12283_29_1386} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5195f9ff-e774-4bd9-ab13-383db52328fb"
              }}
              style={styles.ImageBackground_I624_12283_29_1387}
            />
          </View>
          <View style={styles.View_I624_12283_29_1388}>
            <View style={styles.View_I624_12283_29_1389}>
              <View style={styles.View_I624_12283_29_1390} />
              <View style={styles.View_I624_12283_29_1391}>
                <Text style={styles.Text_I624_12283_29_1391}>Z</Text>
              </View>
            </View>
            <View style={styles.View_I624_12283_29_1392}>
              <View style={styles.View_I624_12283_29_1393} />
              <View style={styles.View_I624_12283_29_1394}>
                <Text style={styles.Text_I624_12283_29_1394}>X</Text>
              </View>
            </View>
            <View style={styles.View_I624_12283_29_1395}>
              <View style={styles.View_I624_12283_29_1396} />
              <View style={styles.View_I624_12283_29_1397}>
                <Text style={styles.Text_I624_12283_29_1397}>C</Text>
              </View>
            </View>
            <View style={styles.View_I624_12283_29_1398}>
              <View style={styles.View_I624_12283_29_1399} />
              <View style={styles.View_I624_12283_29_1400}>
                <Text style={styles.Text_I624_12283_29_1400}>V</Text>
              </View>
            </View>
            <View style={styles.View_I624_12283_29_1401}>
              <View style={styles.View_I624_12283_29_1402} />
              <View style={styles.View_I624_12283_29_1403}>
                <Text style={styles.Text_I624_12283_29_1403}>B</Text>
              </View>
            </View>
            <View style={styles.View_I624_12283_29_1404}>
              <View style={styles.View_I624_12283_29_1405} />
              <View style={styles.View_I624_12283_29_1406}>
                <Text style={styles.Text_I624_12283_29_1406}>N</Text>
              </View>
            </View>
            <View style={styles.View_I624_12283_29_1407}>
              <View style={styles.View_I624_12283_29_1408} />
              <View style={styles.View_I624_12283_29_1409}>
                <Text style={styles.Text_I624_12283_29_1409}>M</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1410}>
            <View style={styles.View_I624_12283_29_1411} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3f559cf-0542-43f2-be98-26890d01141d"
              }}
              style={styles.ImageBackground_I624_12283_29_1412}
            />
          </View>
        </View>
        <View style={styles.View_I624_12283_29_1413}>
          <View style={styles.View_I624_12283_29_1414}>
            <View style={styles.View_I624_12283_29_1415} />
            <View style={styles.View_I624_12283_29_1416}>
              <Text style={styles.Text_I624_12283_29_1416}>123</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1417}>
            <View style={styles.View_I624_12283_29_1418} />
            <View style={styles.View_I624_12283_29_1419}>
              <Text style={styles.Text_I624_12283_29_1419}>space</Text>
            </View>
          </View>
          <View style={styles.View_I624_12283_29_1420}>
            <View style={styles.View_I624_12283_29_1421} />
            <View style={styles.View_I624_12283_29_1422}>
              <Text style={styles.Text_I624_12283_29_1422}>return</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7b434db-c71f-4758-9391-dabf4926e40c"
          }}
          style={styles.ImageBackground_I624_12283_29_1423}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(240, 244, 250, 1)" },
  View_2: { height: hp("115%") },
  View_624_12245: {
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
  View_624_12246: {
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
  View_I624_12246_119_97: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I624_12246_119_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I624_12246_119_98: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("2%")
  },
  ImageBackground_I624_12246_119_99: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I624_12246_119_104: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%")
  },
  ImageBackground_I624_12246_119_105: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I624_12246_119_109: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("2%")
  },
  ImageBackground_I624_12246_119_110: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_624_12247: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22%")
  },
  View_624_12248: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("24%"),
    justifyContent: "center"
  },
  Text_624_12248: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_624_12249: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("32%")
  },
  View_624_12250: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12250_430_6265: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12250_430_6266: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12251: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12251_430_6123: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I624_12251_430_6124: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12252: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("34%"),
    justifyContent: "center"
  },
  Text_624_12252: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12253: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_624_12253: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12254: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_624_12254: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12255: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_624_12255: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_624_12256: {
    width: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("24%")
  },
  ImageBackground_624_12257: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_624_12266: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I624_12266_19_31181: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I624_12266_19_31182: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_624_12267: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("48%")
  },
  View_624_12268: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_624_12269: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_624_12269: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12270: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("55%"),
    justifyContent: "center"
  },
  Text_624_12270: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_624_12271: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("61%")
  },
  ImageBackground_624_12272: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("72%")
  },
  ImageBackground_624_12273: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("78%")
  },
  View_624_12274: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("80%"),
    justifyContent: "center"
  },
  Text_624_12274: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_624_12275: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("88%")
  },
  View_624_12276: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("89%"),
    justifyContent: "center"
  },
  Text_624_12276: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_624_12277: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("98%")
  },
  View_624_12278: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("99%"),
    justifyContent: "center"
  },
  Text_624_12278: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_624_12279: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("65%"),
    justifyContent: "center"
  },
  Text_624_12279: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_624_12280: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_624_12281: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_624_12282: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_624_12283: {
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
  View_I624_12283_29_1323: {
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
  View_I624_12283_29_1324: {
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
  View_I624_12283_29_1325: {
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
  View_I624_12283_29_1326: {
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
  View_I624_12283_29_1327: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1328: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1328: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1329: {
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
  View_I624_12283_29_1330: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1331: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1331: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1332: {
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
  View_I624_12283_29_1333: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1334: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1334: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1335: {
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
  View_I624_12283_29_1336: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1337: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1337: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1338: {
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
  View_I624_12283_29_1339: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1340: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1340: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1341: {
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
  View_I624_12283_29_1342: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1343: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1343: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1344: {
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
  View_I624_12283_29_1345: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1346: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1346: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1347: {
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
  View_I624_12283_29_1348: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1349: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1349: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1350: {
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
  View_I624_12283_29_1351: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1352: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1352: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1353: {
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
  View_I624_12283_29_1354: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1355: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1355: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1356: {
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
  View_I624_12283_29_1357: {
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
  View_I624_12283_29_1358: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1359: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1359: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1360: {
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
  View_I624_12283_29_1361: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1362: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1362: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1363: {
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
  View_I624_12283_29_1364: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1365: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1365: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1366: {
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
  View_I624_12283_29_1367: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1368: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1368: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1369: {
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
  View_I624_12283_29_1370: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1371: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1371: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1372: {
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
  View_I624_12283_29_1373: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1374: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1374: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1375: {
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
  View_I624_12283_29_1376: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1377: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1377: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1378: {
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
  View_I624_12283_29_1379: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1380: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1380: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1381: {
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
  View_I624_12283_29_1382: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1383: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1383: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1384: {
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
  View_I624_12283_29_1385: {
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
  View_I624_12283_29_1386: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  ImageBackground_I624_12283_29_1387: {
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_I624_12283_29_1388: {
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
  View_I624_12283_29_1389: {
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
  View_I624_12283_29_1390: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1391: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1391: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1392: {
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
  View_I624_12283_29_1393: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1394: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1394: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1395: {
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
  View_I624_12283_29_1396: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1397: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1397: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1398: {
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
  View_I624_12283_29_1399: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1400: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1401: {
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
  View_I624_12283_29_1402: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1403: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1403: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1404: {
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
  View_I624_12283_29_1405: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1406: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1406: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1407: {
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
  View_I624_12283_29_1408: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1409: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1409: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I624_12283_29_1410: {
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
  View_I624_12283_29_1411: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  ImageBackground_I624_12283_29_1412: {
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_I624_12283_29_1413: {
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
  View_I624_12283_29_1414: {
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
  View_I624_12283_29_1415: {
    width: wp("22%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  View_I624_12283_29_1416: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1416: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I624_12283_29_1417: {
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
  View_I624_12283_29_1418: {
    width: wp("51%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I624_12283_29_1419: {
    flexGrow: 1,
    width: wp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1419: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I624_12283_29_1420: {
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
  View_I624_12283_29_1421: {
    width: wp("22%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  View_I624_12283_29_1422: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I624_12283_29_1422: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  ImageBackground_I624_12283_29_1423: {
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
