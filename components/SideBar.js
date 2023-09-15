"use client";
import React, { useState } from "react";
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

import { useContext } from "react";
import { sideContext } from "./SidebarContext";
import Link from "next/link";

export default function SideBar({ children }) {
  const { side, setSide } = useContext(sideContext);

  return (
    <>
      <Grid columns={1}>
        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              onHide={() =>
                setSide((prev) => {
                  return { ...prev, buka: false };
                })
              }
              vertical
              direction="right"
              visible={side.buka}
              width="thin"
            >
              <Menu.Item as="a">
                <Icon name="home" />
                <Link href={"/"}> Games</Link>
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="gamepad" />
                <Link href={"/games"}> Games</Link>
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="camera" />
                <Link href={"/chanel"}> chanel</Link>
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
              <Segment basic className=" p-0">
                {children}
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </>
  );
}
