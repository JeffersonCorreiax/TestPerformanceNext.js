import React from "react";

interface StyleSheet {
    fontFamily: string;
}

interface BoxProops {
    children: React.ReactNode;
    tag: any;
    styleSheet: StyleSheet;
}
//teste

export default function Box({ styleSheet, children, tag }: BoxProops) {

    const Tag = tag || 'div'
    return (
        <Tag style={styleSheet}>
            {children}
        </Tag>
    )
}