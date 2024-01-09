import React, { useEffect, useState } from 'react'
import { useGetAdDetails } from '../../../../hooks/useGetAdDetails';
import Spinner from '../../../../components/spinner/Spiner';
import { PlaceAdContainer, PlaceAdWrapper, StepItem, StepLine, StepNumber, StepsContainer } from '../../../PlaceAd/PlaceAd.styled';
import { InlineIcon } from '@iconify/react';
import { StepLabel } from '@mui/material';
import AdPageOne from '../../../PlaceAd/AdPageOne';
import AdPageTwo from '../../../PlaceAd/AdPageTwo';
import EditAdPageOne from './EditAdPageOne';
import EditAdPageTwo from './EditAdPageTwo';
import { editAdvertItem, fetchSingleAdvert } from '../../../../features/userAdvertSlice';
import { useDispatch } from 'react-redux';

const steps = [
    { id: 1, label: "About Ad" },
    { id: 2, label: "Product Information" },
  ];

export default function EditAd() {
    const searchParam = new URLSearchParams(window.location.search);
    const id = searchParam.get("id");
    const { adDetails, loading } = useGetAdDetails(id);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch()

    useEffect(() => {
      const searchParams = new URLSearchParams(window.location.search);
      const pageParam = searchParams.get("page");
      const initialPage = parseInt(pageParam, 10) || 1;
      setCurrentPage(initialPage);
    }, []);
  
    const navigateToNextPage = () => {
      if (currentPage < 3) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("page", (currentPage + 1).toString());
        window.history.pushState({}, "", `?${searchParams.toString()}`);
        setCurrentPage(currentPage + 1);
      }
    };
  
    const navigateToPreviousPage = () => {
      if (currentPage > 1) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("page", (currentPage - 1).toString());
        window.history.pushState({}, "", `?${searchParams.toString()}`);
        setCurrentPage(currentPage - 1);
      }
    };

   useEffect(()=> {
    dispatch(fetchSingleAdvert(id))
   }, [])
  return (
    <PlaceAdContainer>
        {currentPage > 1 && (
        <button className="goBack" onClick={navigateToPreviousPage}>
          <InlineIcon icon="ion:chevron-back-outline" />
          Back to previous page
        </button>
      )}
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner />
          </div> ): <PlaceAdWrapper>
        <div className="headingContainer">
          <h3 className="postAdHeading">Edit Ad</h3>
          <p className="postAdCaptionText">
            Make edits to your advert
          </p>
        </div>

        <StepsContainer>
          {steps.map(({ label, id }) => {
            const isActive = currentPage === id;
            
            const showLine = isActive && currentPage !== 2;
            return (
              <>
                
                  <StepItem key={id}>
                    <StepNumber isActive={isActive}>{id}</StepNumber>
                    <StepLabel isActive={isActive}>{label}</StepLabel>
                    {showLine && <StepLine />}
                  </StepItem>
              
              </>
            );
          })}
        </StepsContainer>

        {currentPage === 1 && <EditAdPageOne adDetails={adDetails} onNextPage={navigateToNextPage} />}
        {currentPage === 2 && <EditAdPageTwo adDetails={adDetails} onNextPage={navigateToNextPage} />}
      </PlaceAdWrapper>}
    </PlaceAdContainer>
  )
}
