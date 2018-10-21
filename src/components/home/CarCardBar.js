import React from 'react';
import { Tabs, Card, Icon, Avatar, Row, Col } from "antd";

const TabPane = Tabs.TabPane;
const { Meta } = Card;

class CarCardBar extends React.Component {
    // should have car data
    // avatar, description, price

    render() {
        let carData = [
            {
                id: "1",
                name: "Honda",
                imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            },
            {
                id: "2",
                name: "Ford",
                imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            },
            {
                id: "3",
                name: "Benz",
                imgUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            }];

        return (
            <Tabs defaultActiveKey="1" style={{color: "rgb(255, 255, 255)"}}>
                {carData.map((item) => {
                    return (
                        <TabPane tab={item.name} key={item.id}>
                            <Row type="flex" >
                                <Col>
                                    <Card
                                        style={{marginBottom: 20}}
                                        cover={<img alt="car" src={item.imgUrl} />}
                                        actions={[<Icon type="setting" />, <Icon type="edit" />]}
                                    >
                                        <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Card title"
                                            description="This is the description"
                                        />
                                    </Card>
                                </Col>
                                <Col >
                                    <Card
                                        cover={<img alt="car" src={item.imgUrl} />}
                                        actions={[<Icon type="setting" />, <Icon type="edit" />]}
                                    >
                                        <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Card title"
                                            description="This is the description"
                                        />
                                    </Card>
                                </Col>
                                <Col >
                                    <Card
                                        cover={<img alt="car" src={item.imgUrl} />}
                                        actions={[<Icon type="setting" />, <Icon type="edit" />]}
                                    >
                                        <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Card title"
                                            description="This is the description"
                                        />
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                    );
                })}
            </Tabs>
        );
    }
}

export default CarCardBar;
