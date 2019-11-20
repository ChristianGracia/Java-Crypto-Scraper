package com.cg.scraper.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.scraper.user.UserInfo;

@Repository
public interface UserRepository extends JpaRepository<UserInfo, String> {

}