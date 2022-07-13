import { Page, Scroll } from "framer";

const items = [0, 1, 2, 3, 4];

export function Example() {
    return (
        <Page width={150} height={150} borderRadius={30} center directionLock>
            <div
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#fff"
                }}
            />
            <Scroll width={150} height={150} borderRadius={30} directionLock>
                {items.map((index) => {
                    return (
                        <div
                            style={{
                                width: 150,
                                height: 70,
                                borderRadius: 20,
                                backgroundColor: "#fff",
                                marginBottom:
                                    index !== items.length - 1 ? 10 : 0
                            }}
                            key={index}
                        />
                    );
                })}
            </Scroll>
            <div
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#fff"
                }}
            />
        </Page>
    );
}