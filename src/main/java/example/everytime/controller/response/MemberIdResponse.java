package example.everytime.controller.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = lombok.AccessLevel.PROTECTED)
public class MemberIdResponse extends ApiResponse {

  private Long memberId;

  public MemberIdResponse(Long memberId, boolean isSuccessful) {
    super(isSuccessful);
    this.memberId = memberId;
  }
}
