package com.cg.scraper.coins;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.scraper.coins.CoinInfo;

@Repository
public interface CoinRepository extends JpaRepository<CoinInfo, String> {

}