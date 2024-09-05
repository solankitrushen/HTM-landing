"use client"

import React from 'react';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

// components
import Banner from '@/app/(DashboardLayout)/components/landingpage/banner/Banner';
import Footer from '@/app/(DashboardLayout)/components/landingpage/footer/Footer';
import LpHeader from '@/app/(DashboardLayout)/components/landingpage/header/Header';

export default function Landingpage () {
  return (
    <PageContainer title="Landingpage" description="this is Landingpage">
      <LpHeader />
      <Banner />
      <Footer />
    </PageContainer>
  );
};

Landingpage.layout = "Blank";