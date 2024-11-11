import React, { useState } from 'react'
import TabTitleBox from './TabTitleBox';
import TabContentBox from './TabContentBox';

const Tabs = ({ ...props }) => {
  const [tabs, setTabs] = useState(1);

  return (
    <>
      <TabTitleBox tabs={tabs} setTabs={setTabs} />
      <TabContentBox {...props} currentTab={tabs} />
    </>
  )
}

export default Tabs