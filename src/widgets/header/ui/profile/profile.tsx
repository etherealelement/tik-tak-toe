import React from 'react';
import {User} from "@/entities/user";
import {Arrow} from "@/shared/icons/Arrow";


export const Profile = () =>
{
    return (
        <button className={"flex gap-4 items-center hover: text-blue-950"}>
            <User></User>
            <Arrow color={"primary"}></Arrow>
        </button>
    );
};
