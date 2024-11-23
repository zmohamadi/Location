"use client";

import { useState } from "react";
import { SelectTail } from "@/Theme/Midone/Forms/SelectTail";

export function LocationSelector({
  component,
  needles,
  data,
  config = { province: false, shahrestan: false, shahr: false },
}) {
  const [selectedProvinceId, setSelectedProvinceId] = useState(null);
  const [selectedShahrestanId, setSelectedShahrestanId] = useState(null);
//   const [selectedBakhshId, setSelectedBakhshId] = useState(null);

  // تغییر استان
  const handleProvinceChange = (e) => {
    console.log(e.value);
    setSelectedProvinceId(Number(e.value)); // مقدار را به عدد تبدیل می‌کنیم
    setSelectedShahrestanId(null);
    // setSelectedBakhshId(null);
  };

  // تغییر شهرستان
  const handleShahrestanChange = (e) => {
    setSelectedShahrestanId(Number(e.value));
    // setSelectedBakhshId(null);
  };


{/* 
    example : 
    <LocationSelector
    component={component}
    needles={needles} 
    data={data} 
    config={{province: true,city:true,shahrestan:false}}
/> */}

  return (
    <>
      {config.province && (
        <SelectTail
          label="province"
          refItem={[component, "province_id"]}
          key={`province-${needles?.province?.length}`}
          data={needles?.province}
          titleKey="name"
          onChange={handleProvinceChange}
        />
      )}

      {config.shahrestan && (
        <SelectTail
          label="shahrestan"
          refItem={[component, "shahrestan_id"]}
          key={`shahrestan-${selectedProvinceId}`}
          data={needles?.shahrestan?.filter((item) => Number(item.province_id) === selectedProvinceId)}
          titleKey="name"
          onChange={handleShahrestanChange}
        />
      )}

    {config.city && (
    <SelectTail
        label="city"
        refItem={[component, "city_id"]}
        key={`city-${config.shahrestan ? selectedShahrestanId : selectedProvinceId}`}
        data={
        config.shahrestan
            ? needles?.city?.filter((item) => Number(item.shahrestan_id) === selectedShahrestanId)
            : needles?.city?.filter((item) => Number(item.province_id) === selectedProvinceId)
        }
        titleKey="name"
    />
    )}


      {/* بخش */}
      {/* {config.bakhsh && (
        <SelectTail
          className="col-span-4"
          label="بخش"
          refItem={[component, "bakhsh_id"]}
          key={`bakhsh-${selectedShahrestanId}`}
          data={needles?.bakhsh?.filter((item) => item.shahrestan === selectedShahrestanId)}
          titleKey="name"
          onChange={(e) => setSelectedBakhshId(e.value)}
        />
      )} */}

      {/* دهستان */}
      {/* {config.dehestan && (
        <SelectTail
          className="col-span-4"
          label="دهستان"
          refItem={[component, "dehestan_id"]}
          key={`dehestan-${selectedBakhshId}`}
          data={needles?.dehestan?.filter((item) => item.bakhsh === selectedBakhshId)}
          titleKey="name"
        />
      )} */}

      {/* آبادی */}
      {/* {config.abadi && (
        <SelectTail
          className="col-span-4"
          label="آبادی"
          refItem={[component, "abadi_id"]}
          key={`abadi-${selectedDehestanId}`}
          data={needles?.abadi?.filter((item) => item.dehestan === selectedDehestanId)}
          titleKey="name"
        />
      )} */}
    </>
  );
}
