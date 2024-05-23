"use client";

import React from "react";
import { Component } from "@/components/shared/Components";
import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { IconButton } from "@/components/ui/IconButton";
import { CheckBox } from "@/components/ui/CheckBox";
import { InputQuantity } from "@/components/ui/InputQuantity";
import { TextField } from "@/components/ui/TextField";
import { InputRadio } from "@/components/ui/InputRadio";
const Components = () => {
    return (
        <div>
            <Component title="Button Component">
                <Button>send money</Button>

                <Button variant="outline">send money </Button>

                <Button variant="secondary">
                    add product <Icon icon="ic:baseline-plus" />
                </Button>

                <Button className="ccc" size="large" variant="secondary">
                    View Full Report
                </Button>

                <Button loading variant="secondary" style={{ width: 300 }}>
                    Log in
                </Button>

                <Button size="large" variant="black">
                    get started today
                </Button>
            </Component>
            <Component title="Button Icon">
                <div>
                    <IconButton icon="tabler:bell-filled" disabled />
                </div>
                <div>
                    <IconButton icon="ep:menu" />
                </div>
                <div>
                    <IconButton icon="ri:search-2-line" />
                </div>
            </Component>
            <Component title="Checkbox">
                <CheckBox />
            </Component>
            <Component title="Input Quantity">
                <InputQuantity quantity={1} onChangeQuantity={() => {}} />
            </Component>
            <Component title="TextField">
                <TextField label="TextField" />
                <TextField
                    label="TextField"
                    error
                    helperText="This textfield is error"
                />
            </Component>
            <Component title="Input Radio">
                <InputRadio
                    // onChange={updateRadio}
                    name="myRadio"
                    value="1"
                    label="Option 1"
                    // checked={value === '1'}
                />
                <InputRadio
                    // onChange={updateRadio}
                    name="myRadio"
                    value="2"
                    label="Option 2"
                    // checked={value === '2'}
                />
            </Component>
        </div>
    );
};

export default Components;
