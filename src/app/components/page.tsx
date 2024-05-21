"use client";

import React from "react";
import { Component } from "@/components/shared/Components";
import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { IconButton } from "@/components/ui/IconButton";
import { CheckBox } from "@/components/ui/CheckBox";
import { InputQuantity } from "@/components/ui/InputQuantity";
import { TextField } from "@/components/ui/TextField";
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
        </div>
    );
};

export default Components;
