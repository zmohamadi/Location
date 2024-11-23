"use client";

import { useLang } from "@/lib";
import React, { useMemo } from "react";

// Reusable LocationField component with React.memo for optimization
const LocationField = React.memo(({ label, field, data, info }) => {

    const {Lang, local} = useLang();

    // استفاده از useMemo برای جلوگیری از محاسبه دوباره داده‌ها
    const fieldName = useMemo(() => {
        if (!info?.[field]) return "اطلاعات موجود نیست";
        const foundItem = data?.find(item => item.id === info[field]);
        return foundItem ? foundItem["name_fa"] : "اطلاعات موجود نیست";
    }, [field, info, data]);

    return (
        <div className="flex items-center space-x-2">
            <span className="font-medium ml-1">{Lang(label)}:</span>
            <span>{fieldName}</span>
        </div>
    );
});

export function LocationView({
    component,
    needles,
    info,
    config = { province: false, shahrestan: false, shahr: false
        // bakhsh: false, dehestan: false, abadi: false 
    },
}) {

    // console.log(info);
//     <LocationView
//     component={component}
//     needles={needles} 
//     info={data}
//     config={{province: true,city:true,shahrestan:true}}
// />

    return (
        <>
            {config.province && (
                <LocationField 
                    label="province" 
                    field="province_id" 
                    data={needles?.province} 
                    info={info}
                />
            )}

            {config.shahrestan && (
                <LocationField 
                    label="shahrestan" 
                    field="shahrestan_id" 
                    data={needles?.shahrestan} 
                    info={info}
                />
            )}

            {/* {config.bakhsh && (
                <LocationField 
                    label="bakhsh" 
                    field="bakhsh_id" 
                    data={needles?.bakhsh} 
                    info={info}
                />
            )} */}

            {/* {config.dehestan && (
                <LocationField 
                    label="dehestan" 
                    field="dehestan_id" 
                    data={needles?.dehestan} 
                    info={info}
                />
            )} */}

            {config.city && (
                <LocationField 
                    label="city" 
                    field="city_id" 
                    data={needles?.city} 
                    info={info}
                />
            )}

            {/* {config.abadi && (
                <LocationField 
                    label="abadi" 
                    field="abadi_id" 
                    data={needles?.abadi} 
                    info={info}
                />
            )} */}
        </>
    );
}
