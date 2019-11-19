package com.cg.scraper;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.scraper.CoinInfo;

@Repository
public interface CoinRepository extends JpaRepository<CoinInfo, String> {

}